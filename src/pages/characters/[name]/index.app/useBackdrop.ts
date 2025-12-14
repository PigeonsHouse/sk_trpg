import { useCallback, useState } from "react";

export const useBackdrop = () => {
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const onBackdropClose = useCallback(
    () => setIsBackdropOpen(false),
    [setIsBackdropOpen]
  );

  return {
    isBackdropOpen,
    onSwitchBackdrop: setIsBackdropOpen,
    onBackdropClose,
  };
};
