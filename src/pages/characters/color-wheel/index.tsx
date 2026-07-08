import { MetaTags } from "../../../components";
import { APP_NAME } from "../../../definitions";
import { useBreakPoint } from "../../../hooks";
import { PcCharacterColorWheel } from "./_pc";
import { SpCharacterColorWheel } from "./_sp";

const CharacterColorWheel = () => {
  const title = `色相環 - ${APP_NAME}`;
  const description =
    "鈴木乖離の生み出したキャラクターたちを、カラーパレットの色相ごとに色相環状に並べて一覧できるページです。";

  const { isPc } = useBreakPoint();

  return (
    <>
      <MetaTags
        title={title}
        description={description}
        path="/characters/color-wheel"
      />
      {isPc ? <PcCharacterColorWheel /> : <SpCharacterColorWheel />}
    </>
  );
};

export default CharacterColorWheel;
