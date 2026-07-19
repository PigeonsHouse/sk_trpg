import { useCallback, useMemo, useState } from "react";
import { MetaTags } from "../../../components";
import { APP_NAME } from "../../../definitions";
import { useBreakPoint } from "../../../hooks";
import { PcCharacterHeight } from "./_pc";
import { SpCharacterHeight } from "./_sp";
import type { CharacterHeightEntry, SortOrder } from "./types";

const heightModules = import.meta.glob<CharacterHeightEntry[]>(
  "../../../content/characterHeights.json",
  { eager: true, import: "default" }
);
const heightEntries =
  heightModules["../../../content/characterHeights.json"] ?? [];

const CharacterHeight = () => {
  const title = `身長比較 - ${APP_NAME}`;
  const description =
    "鈴木乖離の生み出したキャラクターたちを、身長の低い順・高い順に並べて比較できるページです。";

  const { isPc } = useBreakPoint();

  const [order, setOrder] = useState<SortOrder>("asc");
  const onToggleOrder = useCallback(() => {
    setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  }, []);
  const sortedEntries = useMemo(
    () => (order === "asc" ? heightEntries : [...heightEntries].reverse()),
    [order]
  );

  return (
    <>
      <MetaTags
        title={title}
        description={description}
        path="/characters/height"
      />
      {isPc ? (
        <PcCharacterHeight
          entries={sortedEntries}
          order={order}
          onToggleOrder={onToggleOrder}
        />
      ) : (
        <SpCharacterHeight
          entries={sortedEntries}
          order={order}
          onToggleOrder={onToggleOrder}
        />
      )}
    </>
  );
};

export default CharacterHeight;
