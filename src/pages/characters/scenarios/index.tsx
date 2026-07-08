import { useMemo } from "react";
import { MetaTags } from "../../../components";
import { APP_NAME } from "../../../definitions";
import { useBreakPoint } from "../../../hooks";
import { PcCharacterScenarios } from "./_pc";
import { SpCharacterScenarios } from "./_sp";
import type {
  ScenarioAutoEntry,
  ScenarioListItem,
  ScenarioManualData,
} from "./types";

const autoModules = import.meta.glob<ScenarioAutoEntry[]>(
  "../../../content/scenarios.json",
  { eager: true, import: "default" }
);
const autoEntries = autoModules["../../../content/scenarios.json"] ?? [];

const manualModules = import.meta.glob<ScenarioManualData>(
  "../../../content/scenarioManual.json",
  { eager: true, import: "default" }
);
const manualData: ScenarioManualData = manualModules[
  "../../../content/scenarioManual.json"
] ?? { completedExtra: [], upcoming: [] };

const CharacterScenarios = () => {
  const title = `通過シナリオ一覧 - ${APP_NAME}`;
  const description =
    "鈴木乖離の生み出したキャラクターたちが通過してきたTRPGシナリオの一覧ページです。";

  const { isPc } = useBreakPoint();

  const completedList = useMemo<ScenarioListItem[]>(
    () => [
      ...autoEntries,
      ...manualData.completedExtra.map((scenarioTitle) => ({
        title: scenarioTitle,
        characters: [],
      })),
    ],
    []
  );

  const upcomingList = manualData.upcoming;

  return (
    <>
      <MetaTags
        title={title}
        description={description}
        path="/characters/scenarios"
      />
      {isPc ? (
        <PcCharacterScenarios
          completedList={completedList}
          upcomingList={upcomingList}
        />
      ) : (
        <SpCharacterScenarios
          completedList={completedList}
          upcomingList={upcomingList}
        />
      )}
    </>
  );
};

export default CharacterScenarios;
