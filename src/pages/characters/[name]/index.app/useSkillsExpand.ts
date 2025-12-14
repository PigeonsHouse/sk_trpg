import { useCallback, useEffect, useState } from "react";

export const useSkillsExpand = (characterId: string) => {
  const [isSkillsExpand, setIsSkillsExpand] = useState(false);
  const switchIsSkillExpand = useCallback(() => {
    setIsSkillsExpand((prev) => !prev);
  }, [setIsSkillsExpand]);

  useEffect(() => {
    setIsSkillsExpand(false);
  }, [characterId]);

  return {
    isSkillsExpand,
    switchIsSkillExpand,
  };
};
