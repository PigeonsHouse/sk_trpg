import { useMemo } from "react";
import { useNavigate } from "react-router";
import {
  ShortIdBoard,
  SingleLight,
  SpArtGallery,
  SpCharacterHeader,
  SpCommentFrame,
  SpCostumeArea,
  SpHistoryFrame,
  SpProfileFrame,
  SpQAFrame,
  SpSkillsFrame,
  SpStatusFrame,
  TrafficLight,
} from "../../../components";
import { CharactersId } from "../../../definitions";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import {
  useBackdrop,
  useHeader,
  useHistory,
  useSkillsExpand,
  useSprites,
} from "./index.app";
import {
  SpGradationInnerContainer,
  SpBackdrop,
  SpContainer,
  SpGradationBackground,
  SpMarginContainer,
  SpMarginContainerRelative,
  SpQuestionContainer,
  SpShortIdBoardStyle,
  SpSingleLightStyle,
  SpSprite,
  SpSpriteContainer,
  SpTrafficLightStyle,
  SpBrailleBlock,
  SpRoadBackGround,
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
  const { selectedHistoryIndex, setSelectedHistoryIndex } = useHistory(
    data.histories
  );

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
            <SpHistoryFrame
              histories={data.histories}
              mainColor={mainColor}
              selectedColor={yellowColor}
              selectedHistoryIndex={selectedHistoryIndex}
              setSelectedHistoryIndex={setSelectedHistoryIndex}
            />
          </SpGradationInnerContainer>
        </SpMarginContainer>
      </SpGradationBackground>
      <SpQuestionContainer bgColor={mainColor}>
        <SpMarginContainer>
          <SpQAFrame qaList={data.qaList} mainColor={mainColor} />
        </SpMarginContainer>
      </SpQuestionContainer>
      <SpRoadBackGround>
        <SpBrailleBlock blockColor={yellowColor} />
        <SpMarginContainer>
          <SpCommentFrame comment={data.comment} />
        </SpMarginContainer>
        <SpArtGallery artGallery={data.artGallery} mainColor={mainColor} />
      </SpRoadBackGround>
    </SpContainer>
  );
};
