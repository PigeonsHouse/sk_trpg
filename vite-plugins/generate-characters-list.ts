import * as fs from "fs";
import * as path from "path";
import type { Plugin } from "vite";

/**
 * Viteプラグイン: src/data/characters/内のJSONファイル一覧を
 * src/data/characters.jsonに自動生成する
 */
export function generateCharactersList(): Plugin {
  const charactersDir = "public/data/characters";
  const outputFile = "public/data/characters.json";

  function updateCharactersList() {
    try {
      // charactersディレクトリが存在するか確認
      if (!fs.existsSync(charactersDir)) {
        console.warn(
          `[generate-characters-list] Directory not found: ${charactersDir}`
        );
        return;
      }

      // ディレクトリ内のJSONファイルを取得
      const files = fs
        .readdirSync(charactersDir)
        .filter((file) => file.endsWith(".json"));

      const updatedFiles = files.map((file) => {
        const dataString = fs.readFileSync(`${charactersDir}/${file}`, "utf-8");
        const data = JSON.parse(dataString);
        const id = file.replace(".json", "");
        return {
          id,
          name: data.name,
          enName: data.enName,
          thumbnailUrl: data.thumbnailUrl,
          backgroundUrl: data.backgroundUrl,
          color: data.colorPalette[0],
          index: data.number,
          hide: data.hide || false,
        };
      });
      const sorted = updatedFiles
        .filter((file) => !file.hide)
        .sort((a, b) => a.index - b.index)
        .map((file) => {
          delete file.index;
          delete file.hide;
          return file;
        });

      // characters.jsonに書き込み
      const jsonContent = JSON.stringify(sorted, null, 2);
      fs.writeFileSync(outputFile, jsonContent + "\n", "utf-8");

      console.log(
        `[generate-characters-list] Updated ${outputFile} with ${files.length} characters`
      );
    } catch (error) {
      console.error("[generate-characters-list] Error:", error);
    }
  }

  return {
    name: "generate-characters-list",

    // 開発サーバー起動時とビルド開始時に実行
    buildStart() {
      updateCharactersList();
    },

    // ファイル変更の監視（開発モード）
    configureServer(server) {
      const watcher = server.watcher;
      // 絶対パスに変換
      const absoluteCharactersDir = path.resolve(charactersDir);
      const absoluteOutputFile = path.resolve(outputFile);

      watcher.add(absoluteCharactersDir);

      const isTargetFile = (file: string) => {
        const normalizedFile = path.normalize(file);
        const normalizedDir = path.normalize(absoluteCharactersDir);
        const normalizedOutput = path.normalize(absoluteOutputFile);
        return (
          // ターゲットのフォルダ内でjsonファイルに変更があったら検知
          // outputFile自体は除外
          normalizedFile.startsWith(normalizedDir) &&
          file.endsWith(".json") &&
          normalizedFile !== normalizedOutput
        );
      };

      watcher.on("add", (file) => {
        if (isTargetFile(file)) {
          console.log(`[generate-characters-list] File added: ${file}`);
          updateCharactersList();
          server.ws.send({ type: "full-reload" });
        }
      });

      watcher.on("change", (file) => {
        if (isTargetFile(file)) {
          console.log(`[generate-characters-list] File changed: ${file}`);
          updateCharactersList();
          server.ws.send({ type: "full-reload" });
        }
      });

      watcher.on("unlink", (file) => {
        if (isTargetFile(file)) {
          console.log(`[generate-characters-list] File deleted: ${file}`);
          updateCharactersList();
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}
