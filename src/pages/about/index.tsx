import { APP_NAME } from "../../definitions";
import { useBreakPoint } from "../../hooks";
import { PcAbout } from "./_pc";

const About = () => {
  const title = `このサイトは何？ - ${APP_NAME}`;

  const { isPc } = useBreakPoint();

  return (
    <>
      <title>{title}</title>
      {isPc ? <PcAbout /> : <PcAbout />}
    </>
  );
};

export default About;
