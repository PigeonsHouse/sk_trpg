import { APP_NAME } from "../definitions";
import { useBreakPoint } from "../hooks";
import { PcTop } from "./_pc";
import { SpTop } from "./_sp";

const Top = () => {
  const title = APP_NAME;

  const { isPc } = useBreakPoint();

  return (
    <>
      <title>{title}</title>
      {isPc ? <PcTop /> : <SpTop />}
    </>
  );
};

export default Top;
