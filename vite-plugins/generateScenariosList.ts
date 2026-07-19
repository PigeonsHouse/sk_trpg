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

// scenarioManual.json内でキャラJSON側の反映有無をチェックする対象のキー
const MANUAL_LIST_KEYS = [
  "completedExtra",
  "upcoming",
  "watched",
  "wishlist",
] as const;

/**
 * scenarioManual.json(手動更新分)のうち、キャラJSON側にhistoriesとして
 * 既に反映されたタイトルを取り除く(通過予定→通過済み、行きたい→通過済み等で
 * 不要になった手動記述の掃除)
 */
function pruneManualScenarios(autoTitles: Set<string>, manualFile: string) {
  try {
    if (!fs.existsSync(manualFile)) return;

    const raw = fs.readFileSync(manualFile, "utf-8");
    const manual = JSON.parse(raw);
    let changed = false;

    const pruned = { ...manual };
    for (const key of MANUAL_LIST_KEYS) {
      const list: unknown = manual[key];
      if (!Array.isArray(list)) continue;

      const filtered = list.filter(
        (title) => typeof title !== "string" || !autoTitles.has(title)
      );
      if (filtered.length !== list.length) changed = true;
      pruned[key] = filtered;
    }

    if (!changed) return;

    fs.writeFileSync(
      manualFile,
      JSON.stringify(pruned, null, 2) + "\n",
      "utf-8"
    );
    console.log(
      `[generate-scenarios-list] Pruned scenarios already covered by character pages from ${manualFile}`
    );
  } catch (error) {
    console.error(
      "[generate-scenarios-list] Failed to prune scenarioManual.json:",
      error
    );
  }
}

/**
 * Viteプラグイン: src/content/characters/内のJSONファイルから
 * シナリオ一覧ページ用のsrc/content/scenarios.jsonを自動生成する
 * ("original"キーを持つファイルは派生キャラクターのため対象外)
 *
 * 各キャラクターのhistories[0](最初の履歴)のシナリオのみ、
 * そのシナリオを通過したキャラクターとして紐付ける
 *
 * あわせて、src/content/scenarioManual.json(手動更新分)のうち
 * キャラJSON側に反映済みとなったタイトルを自動で取り除く
 */
export function generateScenariosList(): Plugin {
  const charactersDir = "src/content/characters";
  const outputFile = "src/content/scenarios.json";
  const manualFile = "src/content/scenarioManual.json";

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

      pruneManualScenarios(new Set(scenarioMap.keys()), manualFile);
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
