import { useEffect, useState } from "react";
import type { NavigateFunction } from "react-router";
import type { CharacterSummary } from "../../../../types";

export const useHeader = (
  navigate: NavigateFunction,
  summary: CharacterSummary[],
  characterId: string
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
    summary.map((summaryData) => {
      if (summaryData.id === characterId) {
        isFind = true;
      } else if (isFind && nextId === undefined) {
        nextId = summaryData.id;
      }
      if (!isFind) {
        prevId = summaryData.id;
      }
    });
    setPreviousCharacterId(prevId);
    setNextCharacterId(nextId);
  }, [characterId, summary]);

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
