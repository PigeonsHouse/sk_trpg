import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router";

interface AnchorProps {
  id: string;
  offset?: number;
  disabledScroll?: boolean;
}

/**
 * アバウトページで使用するアンカースクロールの対象
 * ページ遷移などでレンダリングが不完全なときにスクロールが不発するのを避けてくれる
 */
export const Anchor: React.FC<AnchorProps> = ({
  id,
  offset,
  disabledScroll,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const handleHashChange = useCallback(() => {
    if (!disabledScroll && location.hash.substring(1) === id && ref.current) {
      const top =
        -window.scrollY + ref.current.offsetTop + (offset ? offset : 0);
      window.scrollBy({ top, behavior: "smooth" });
    }
  }, [id, disabledScroll, location, ref]);

  useEffect(() => {
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange]);

  return <div id={id} ref={ref} />;
};
