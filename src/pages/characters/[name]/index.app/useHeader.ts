import { useEffect, useState } from "react";
import type { NavigateFunction } from "react-router";
import type { CharacterSummary } from "../../../../types";

export const useHeader = (
  navigate: NavigateFunction,
  summary: CharacterSummary[],
  characterId: string,
  original?: string
) => {
  const [previousCharacterId, setPreviousCharacterId] = useState<
    string | undefined
  >();
  const [nextCharacterId, setNextCharacterId] = useState<string | undefined>();

  const handlePrevious = previousCharacterId
    ? () => {
        navigate(`/characters/${previousCharacterId}`);
        scrollTo(0, 0);
      }
    : undefined;
  const handleNext = nextCharacterId
    ? () => {
        navigate(`/characters/${nextCharacterId}`);
        scrollTo(0, 0);
      }
    : undefined;

  useEffect(() => {
    let prevId: string | undefined = undefined;
    let nextId: string | undefined = undefined;
    let isFind = false;
    const targetCharacterId = original ?? characterId;
    summary.map((summaryData) => {
      if (summaryData.id === targetCharacterId) {
        isFind = true;
      } else if (isFind && nextId === undefined && !summaryData.original) {
        nextId = summaryData.id;
      }
      if (!isFind && !summaryData.original) {
        prevId = summaryData.id;
      }
    });
    setPreviousCharacterId(prevId);
    setNextCharacterId(nextId);
  }, [characterId, original, summary]);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const callback = () => {
      setIsScrolled(window.scrollY !== 0);
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);

  return {
    handlePrevious,
    handleNext,
    isHeaderShrink: isScrolled,
  };
};
