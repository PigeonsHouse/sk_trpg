import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { useBreakPoint } from "../hooks";

const App = () => {
  const { pathname, hash } = useLocation();
  const { isPc } = useBreakPoint();

  useEffect(() => {
    // ハッシュ付き遷移はAnchorコンポーネントがスクロール位置を制御する
    // SPのTOPと/aboutは同一ページで、SpTopが自前でスクロール位置を制御する
    const isSpTopPage = !isPc && (pathname === "/" || pathname === "/about");
    if (hash === "" && !isSpTopPage) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, isPc]);

  return <Outlet />;
};

export default App;
