import { useCallback } from "react";
import { CharacterCard, TopGuideBoard } from "../components";
import { useGetSummary } from "../hooks";
import {
  CharacterCardStyle,
  TopBackgroundContainer,
  TopItemContainer,
  TopPageContainer,
} from "./styled";

export const PcTop = () => {
  const { data: summary } = useGetSummary();
  const onScroll = useCallback((e: React.WheelEvent) => {
    e.currentTarget.scrollLeft += e.deltaY;
  }, []);

  return (
    <TopPageContainer onWheel={onScroll}>
      <TopBackgroundContainer>
        <TopItemContainer>
          <TopGuideBoard />
          {summary
            ?.filter((character) => !character.original)
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
