import { APP_NAME } from "../../definitions";
import { useBreakPoint } from "../../hooks";
import { PcAbout } from "./_pc";
import { SpAbout } from "./_sp";

const About = () => {
  const title = `このサイトは何？ - ${APP_NAME}`;

  const { isPc } = useBreakPoint();

  return (
    <>
      <title>{title}</title>
      {isPc ? <PcAbout /> : <SpAbout />}
    </>
  );
};

export default About;
