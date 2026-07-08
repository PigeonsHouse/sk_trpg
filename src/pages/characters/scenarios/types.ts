export type ScenarioCharacterRef = {
  id: string;
  name: string;
  iconUrl: string;
  convertedIconUrl?: string;
  color: string;
};

// src/content/scenarios.json (自動生成)の1件分
export type ScenarioAutoEntry = {
  title: string;
  characters: ScenarioCharacterRef[];
};

// src/content/scenarioManual.json (手動更新)の中身
export type ScenarioManualData = {
  completedExtra: string[];
  upcoming: string[];
};

// 画面表示用に自動生成分と手動追加分をマージした1件分
export type ScenarioListItem = {
  title: string;
  characters: ScenarioCharacterRef[];
};
