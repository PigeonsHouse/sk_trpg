import { useCallback } from "react";
import { CharacterCard, TopGuideBoard } from "../components";
import { characterSummaries } from "../content";
import {
  CharacterCardStyle,
  TopBackgroundContainer,
  TopItemContainer,
  TopPageContainer,
} from "./styled";

export const PcTop = () => {
  const onScroll = useCallback((e: React.WheelEvent) => {
    e.currentTarget.scrollLeft += e.deltaY;
  }, []);

  return (
    <TopPageContainer onWheel={onScroll}>
      <TopBackgroundContainer>
        <TopItemContainer>
          <TopGuideBoard />
          {characterSummaries
            .filter((character) => !character.original)
            .map((character) => (
              <CharacterCard
                key={character.id}
                data={character}
                className={CharacterCardStyle}
                withoutName
                borderWidth={2}
              />
            ))}
        </TopItemContainer>
      </TopBackgroundContainer>
    </TopPageContainer>
  );
};
