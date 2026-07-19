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
] ?? { completedExtra: [], upcoming: [], watched: [], wishlist: [] };

const CharacterScenarios = () => {
  const title = `線路図 - ${APP_NAME}`;
  const description =
    "鈴木乖離の生み出したキャラクターたちが通過してきたTRPGシナリオの一覧ページです。";

  const { isPc } = useBreakPoint();

  const completedList = useMemo<ScenarioListItem[]>(() => {
    const merged: ScenarioListItem[] = [
      ...autoEntries,
      ...manualData.completedExtra.map((scenarioTitle) => ({
        title: scenarioTitle,
        characters: [],
      })),
    ];
    // キャラアイコンが付与されているシナリオ(=histories[0]で紐付いたもの)を優先的に上に表示する
    return [...merged].sort(
      (a, b) =>
        Number(a.characters.length === 0) - Number(b.characters.length === 0)
    );
  }, []);

  const upcomingList = manualData.upcoming;
  const watchedList = manualData.watched;
  const wishlist = manualData.wishlist;

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
          watchedList={watchedList}
          wishlist={wishlist}
        />
      ) : (
        <SpCharacterScenarios
          completedList={completedList}
          upcomingList={upcomingList}
          watchedList={watchedList}
          wishlist={wishlist}
        />
      )}
    </>
  );
};

export default CharacterScenarios;
