import { MetaTags } from "../../components";
import { APP_NAME } from "../../definitions";
import { useBreakPoint } from "../../hooks";
import { SpTop } from "../_sp";
import { PcAbout } from "./_pc";

const About = () => {
  const title = `このサイトは何？ - ${APP_NAME}`;
  const description =
    "鈴木乖離という人間がTRPGで生み出したプレイキャラクターのまとめサイトです。サイトテーマは「駅」です。";

  const { isPc } = useBreakPoint();

  return (
    <>
      <MetaTags title={title} description={description} path="/about" />
      {isPc ? <PcAbout /> : <SpTop />}
    </>
  );
};

export default About;
