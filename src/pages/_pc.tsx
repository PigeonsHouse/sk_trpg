import { useCallback, useEffect, useRef, useState } from "react";
import { CharacterCard, StationSprites, TopGuideBoard } from "../components";
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

  const rowRef = useRef<HTMLDivElement>(null);
  const [gapCenters, setGapCenters] = useState<number[]>([]);

  useEffect(() => {
    const container = rowRef.current;
    if (!container) return;

    const updateGapCenters = () => {
      const items = Array.from(container.children) as HTMLElement[];
      const centers: number[] = [];
      for (let i = 0; i < items.length - 1; i++) {
        const currentRight = items[i].offsetLeft + items[i].offsetWidth;
        const nextLeft = items[i + 1].offsetLeft;
        centers.push((currentRight + nextLeft) / 2);
      }
      setGapCenters(centers);
    };
    updateGapCenters();

    const resizeObserver = new ResizeObserver(updateGapCenters);
    Array.from(container.children).forEach((child) =>
      resizeObserver.observe(child)
    );
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <TopPageContainer onWheel={onScroll}>
      <TopBackgroundContainer>
        <TopItemContainer>
          <div ref={rowRef} style={{ display: "contents" }}>
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
          </div>
          <StationSprites gapCenters={gapCenters} />
        </TopItemContainer>
      </TopBackgroundContainer>
    </TopPageContainer>
  );
};
