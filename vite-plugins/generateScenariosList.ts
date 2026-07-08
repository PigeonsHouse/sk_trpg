import * as fs from "fs";
import * as path from "path";
import type { Plugin } from "vite";

type ScenarioCharacterRef = {
  id: string;
  name: string;
  iconUrl: string;
  color: string;
};

type ScenarioEntry = {
  title: string;
  characters: ScenarioCharacterRef[];
};

/**
 * Viteプラグイン: src/content/characters/内のJSONファイルから
 * シナリオ一覧ページ用のsrc/content/scenarios.jsonを自動生成する
 * ("original"キーを持つファイルは派生キャラクターのため対象外)
 *
 * 各キャラクターのhistories[0](最初の履歴)のシナリオのみ、
 * そのシナリオを通過したキャラクターとして紐付ける
 */
export function generateScenariosList(): Plugin {
  const charactersDir = "src/content/characters";
  const outputFile = "src/content/scenarios.json";

  function updateScenariosList() {
    try {
      if (!fs.existsSync(charactersDir)) {
        console.warn(
          `[generate-scenarios-list] Directory not found: ${charactersDir}`
        );
        return;
      }

      const files = fs
        .readdirSync(charactersDir)
        .filter((file) => file.endsWith(".json"))
        .sort();

      const scenarioMap = new Map<string, ScenarioEntry>();

      files.forEach((file) => {
        const dataString = fs.readFileSync(`${charactersDir}/${file}`, "utf-8");
        const data = JSON.parse(dataString);

        // originalキーを持つファイル(派生キャラクター)は対象外
        if (data.original) return;

        const idWithNumber = file.replace(".json", "");
        const [, ...rest] = idWithNumber.split("-");
        const id = rest.join("-");

        const histories = Array.isArray(data.histories) ? data.histories : [];
        histories.forEach((history: { title?: string }, index: number) => {
          const title = history?.title;
          if (!title) return;

          if (!scenarioMap.has(title)) {
            scenarioMap.set(title, { title, characters: [] });
          }

          // histories配列の0番目のみ、通過キャラクターとして紐付ける
          if (index === 0) {
            const entry = scenarioMap.get(title)!;
            if (!entry.characters.some((c) => c.id === id)) {
              entry.characters.push({
                id,
                name: data.name,
                iconUrl: data.sprites?.[0]?.iconUrl,
                color: data.colorPalette?.[0],
              });
            }
          }
        });
      });

      const entries = Array.from(scenarioMap.values());

      const jsonContent = JSON.stringify(entries, null, 2);
      fs.writeFileSync(outputFile, jsonContent + "\n", "utf-8");

      console.log(
        `[generate-scenarios-list] Updated ${outputFile} with ${entries.length} scenarios`
      );
    } catch (error) {
      console.error("[generate-scenarios-list] Error:", error);
    }
  }

  return {
    name: "generate-scenarios-list",

    // 開発サーバー起動時とビルド開始時に実行
    buildStart() {
      updateScenariosList();
    },

    // ファイル変更の監視（開発モード）
    configureServer(server) {
      const watcher = server.watcher;
      const absoluteCharactersDir = path.resolve(charactersDir);
      const absoluteOutputFile = path.resolve(outputFile);

      watcher.add(absoluteCharactersDir);

      const isTargetFile = (file: string) => {
        const normalizedFile = path.normalize(file);
        const normalizedDir = path.normalize(absoluteCharactersDir);
        const normalizedOutput = path.normalize(absoluteOutputFile);
        return (
          normalizedFile.startsWith(normalizedDir) &&
          file.endsWith(".json") &&
          normalizedFile !== normalizedOutput
        );
      };

      watcher.on("add", (file) => {
        if (isTargetFile(file)) {
          console.log(`[generate-scenarios-list] File added: ${file}`);
          updateScenariosList();
          server.ws.send({ type: "full-reload" });
        }
      });

      watcher.on("change", (file) => {
        if (isTargetFile(file)) {
          console.log(`[generate-scenarios-list] File changed: ${file}`);
          updateScenariosList();
          server.ws.send({ type: "full-reload" });
        }
      });

      watcher.on("unlink", (file) => {
        if (isTargetFile(file)) {
          console.log(`[generate-scenarios-list] File deleted: ${file}`);
          updateScenariosList();
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}
