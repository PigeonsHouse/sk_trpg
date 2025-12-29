import { useCallback, useEffect, useState } from "react";
import { CharacterCard, TopGuideBoard } from "../components";
import type { CharacterSummary } from "../types";
import {
  CharacterCardStyle,
  TopBackgroundContainer,
  TopItemContainer,
  TopPageContainer,
} from "./styled";

export const PcTop = () => {
  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  const onScroll = useCallback((e: React.WheelEvent) => {
    e.currentTarget.scrollLeft += e.deltaY;
  }, []);

  return (
    <TopPageContainer onWheel={onScroll}>
      <TopBackgroundContainer>
        <TopItemContainer>
          <TopGuideBoard />
          {summary
            .filter((character) => !character.original)
            .map((character) => (
              <CharacterCard
                key={character.id}
                data={character}
                className={CharacterCardStyle}
              />
            ))}
        </TopItemContainer>
      </TopBackgroundContainer>
    </TopPageContainer>
  );
};
