import { useEffect, useState } from "react";
import { BREAK_POINT } from "../definitions";

export const useBreakPoint = () => {
  const [isPc, setIsPc] = useState(window.innerWidth >= BREAK_POINT);

  useEffect(() => {
    const calcInnerWidth = () => {
      setIsPc(window.innerWidth >= BREAK_POINT);
    };

    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return {
    isPc,
  };
};
