import { APP_NAME } from "../../definitions";
import { useBreakPoint } from "../../hooks";
import { SpTop } from "../_sp";
import { PcAbout } from "./_pc";

const About = () => {
  const title = `このサイトは何？ - ${APP_NAME}`;

  const { isPc } = useBreakPoint();

  return (
    <>
      <title>{title}</title>
      {isPc ? <PcAbout /> : <SpTop />}
    </>
  );
};

export default About;
