import { useMemo, useState } from "react";
import type { History } from "../../../../types";

export const useHistory = (histories: History[]) => {
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(0);
  const safeSelectedHistoryIndex = useMemo(
    () => Math.min(selectedHistoryIndex, histories.length - 1),
    [selectedHistoryIndex, histories]
  );
  return {
    selectedHistoryIndex: safeSelectedHistoryIndex,
    setSelectedHistoryIndex,
  };
};
