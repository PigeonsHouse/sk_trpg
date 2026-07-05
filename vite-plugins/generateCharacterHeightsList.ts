import * as fs from "fs";
import * as path from "path";
import type { Plugin } from "vite";

/**
 * Viteプラグイン: src/content/characters/内のJSONファイルから
 * 身長比較ページ用のsrc/content/characterHeights.jsonを自動生成する
 * ("original"キーを持つファイルは派生キャラクターのため対象外)
 */
export function generateCharacterHeightsList(): Plugin {
  const charactersDir = "src/content/characters";
  const outputFile = "src/content/characterHeights.json";

  function updateCharacterHeightsList() {
    try {
      // charactersディレクトリが存在するか確認
      if (!fs.existsSync(charactersDir)) {
        console.warn(
          `[generate-character-heights-list] Directory not found: ${charactersDir}`
        );
        return;
      }

      // ディレクトリ内のJSONファイルを取得
      const files = fs
        .readdirSync(charactersDir)
        .filter((file) => file.endsWith(".json"));

      const entries = files
        .map((file) => {
          const dataString = fs.readFileSync(
            `${charactersDir}/${file}`,
            "utf-8"
          );
          const data = JSON.parse(dataString);

          // originalキーを持つファイル(派生キャラクター)は対象外
          if (data.original) return null;

          const idWithNumber = file.replace(".json", "");
          const [, ...rest] = idWithNumber.split("-");
          const id = rest.join("-");

          const height = data.profile?.height as string | undefined;
          const heightMatch = height?.match(/\d+/);
          if (!height || !heightMatch) {
            console.warn(
              `[generate-character-heights-list] Skipped ${file}: height not found`
            );
            return null;
          }

          return {
            id,
            name: data.name,
            height,
            spriteUrl: data.sprites?.[0]?.spriteUrl,
            heightCm: Number(heightMatch[0]),
          };
        })
        .filter((entry): entry is NonNullable<typeof entry> => entry !== null)
        // heightの昇順に並べる
        .sort((a, b) => a.heightCm - b.heightCm)
        .map(({ heightCm, ...rest }) => rest);

      // characterHeights.jsonに書き込み
      const jsonContent = JSON.stringify(entries, null, 2);
      fs.writeFileSync(outputFile, jsonContent + "\n", "utf-8");

      console.log(
        `[generate-character-heights-list] Updated ${outputFile} with ${entries.length} characters`
      );
    } catch (error) {
      console.error("[generate-character-heights-list] Error:", error);
    }
  }

  return {
    name: "generate-character-heights-list",

    // 開発サーバー起動時とビルド開始時に実行
    buildStart() {
      updateCharacterHeightsList();
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
          console.log(`[generate-character-heights-list] File added: ${file}`);
          updateCharacterHeightsList();
          server.ws.send({ type: "full-reload" });
        }
      });

      watcher.on("change", (file) => {
        if (isTargetFile(file)) {
          console.log(
            `[generate-character-heights-list] File changed: ${file}`
          );
          updateCharacterHeightsList();
          server.ws.send({ type: "full-reload" });
        }
      });

      watcher.on("unlink", (file) => {
        if (isTargetFile(file)) {
          console.log(
            `[generate-character-heights-list] File deleted: ${file}`
          );
          updateCharacterHeightsList();
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}
