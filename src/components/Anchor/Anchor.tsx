import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { sleep } from "../../utils";

interface AnchorProps {
  id: string;
}

export const Anchor: React.FC<AnchorProps> = ({ id }) => {
  const ref = useRef<any>(null);
  const location = useLocation();

  const handleHashChange = useCallback(() => {
    sleep(2).then(() => {
      if (location.hash.substring(1) === id && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    });
  }, [id, location, ref]);

  useEffect(() => {
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [handleHashChange]);

  return <div id={id} ref={ref} />;
};
