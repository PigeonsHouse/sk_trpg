import { useEffect } from "react";

const recreateScrollbarWidth = () => {
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    window.innerWidth - document.documentElement.clientWidth + "px"
  );
};

export const useScrollbarWidth = () => {
  useEffect(() => {
    recreateScrollbarWidth();
    window.addEventListener("resize", recreateScrollbarWidth);
    return () => window.removeEventListener("resize", recreateScrollbarWidth);
  }, []);
};
