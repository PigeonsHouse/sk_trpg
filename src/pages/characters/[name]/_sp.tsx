import { useMemo } from "react";
import { useNavigate } from "react-router";
import {
  CommonFrame,
  GoogleFontIcon,
  ShortIdBoard,
  SingleLight,
  SpCharacterHeader,
  SpCostumeArea,
  SpProfileFrame,
  SpQAFrame,
  SpSkillsFrame,
  SpStatusFrame,
  TrafficLight,
} from "../../../components";
import { CharactersId, UiColor } from "../../../definitions";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import {
  useBackdrop,
  useHeader,
  useSkillsExpand,
  useSprites,
} from "./index.app";
import {
  SpGradationInnerContainer,
  SpBackdrop,
  SpCommonFrameStyle,
  SpContainer,
  SpFrameTitle,
  SpGradationBackground,
  SpMarginContainer,
  SpMarginContainerRelative,
  SpQuestionContainer,
  SpShortIdBoardStyle,
  SpSingleLightStyle,
  SpSprite,
  SpSpriteContainer,
  SpTrafficLightStyle,
} from "./styled";

type SpCharacterAboutProps = {
  summary: CharacterSummary[];
  characterId: CharactersId;
  index: number;
  data: CharacterDetail;
};

export const SpCharacterAbout: React.FC<SpCharacterAboutProps> = ({
  summary,
  characterId,
  index,
  data,
}) => {
  const navigate = useNavigate();

  const [mainColor, secondColor, yellowColor] = useMemo(() => {
    return data.colorPalette;
  }, [data]);

  const { isBackdropOpen, onSwitchBackdrop, onBackdropClose } = useBackdrop();
  const { handlePrevious, handleNext } = useHeader(
    navigate,
    summary,
    characterId,
    data.original
  );
  const { displaySpriteIndex, costumeList } = useSprites(
    navigate,
    characterId,
    data.sprites
  );
  const { isSkillsExpand, switchIsSkillExpand } = useSkillsExpand(characterId);
  // const { selectedHistoryIndex, setSelectedHistoryIndex } = useHistory(
  //   data.histories
  // );

  // const handleAboutCharacters = useCallback(() => {
  //   navigate(Url.aboutTo("characters"));
  // }, [navigate]);

  return (
    <SpContainer>
      <SpBackdrop open={isBackdropOpen} onClick={onBackdropClose} />
      <SpCharacterHeader
        mainColor={mainColor}
        name={data.name}
        enName={data.enName}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        isBackdropOpen={isBackdropOpen}
        onSwitchMenuOpen={onSwitchBackdrop}
      />
      <SpSpriteContainer backgroundColor={mainColor}>
        <SpMarginContainerRelative>
          <TrafficLight
            colorPalette={data.colorPalette}
            className={SpTrafficLightStyle}
            isSp
          />
          <SingleLight
            lightColor={yellowColor}
            className={SpSingleLightStyle}
            isSp
          />
          <ShortIdBoard
            shortId={data.shortId}
            number={index}
            bgColor={yellowColor}
            className={SpShortIdBoardStyle}
            isSp
          />
          <SpSprite src={data.sprites[displaySpriteIndex].spriteUrl} />
        </SpMarginContainerRelative>
      </SpSpriteContainer>
      <SpGradationBackground startColor={mainColor} endColor={secondColor}>
        <SpMarginContainer>
          <SpGradationInnerContainer>
            <SpCostumeArea
              items={costumeList}
              mainColor={mainColor}
              selectedColor={yellowColor}
            />
            <SpProfileFrame profile={data.profile} mainColor={mainColor} />
            <SpStatusFrame status={data.status} mainColor={mainColor} />
            <SpSkillsFrame
              skills={data.skills}
              mainColor={mainColor}
              isExpand={isSkillsExpand}
              switchExpand={switchIsSkillExpand}
            />
            <CommonFrame className={SpCommonFrameStyle}>
              <SpFrameTitle>
                <GoogleFontIcon
                  iconName="fmd_good"
                  size={32}
                  color={UiColor.darkGray}
                />
                停車駅
              </SpFrameTitle>
              <div>
                {data.histories.map((history, i) => (
                  <div key={i}>{history.title}</div>
                ))}
              </div>
            </CommonFrame>
          </SpGradationInnerContainer>
        </SpMarginContainer>
      </SpGradationBackground>
      <SpQuestionContainer bgColor={mainColor}>
        <SpMarginContainer>
          <SpQAFrame qaList={data.qaList} mainColor={mainColor} />
        </SpMarginContainer>
      </SpQuestionContainer>
    </SpContainer>
  );
};
