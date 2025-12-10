import { useMemo } from "react";
import { useNavigate } from "react-router";
import { css } from "@emotion/css";
import {
  CostumeList,
  NameBoard,
  NavigateArrow,
  ShortIdBoard,
  SingleLight,
  TrafficLight,
} from "../../../components";
import { CharactersId } from "../../../definitions";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import { calcNameSize } from "../../../utils";
import { useHeader, useSprites } from "./index.app";
import {
  GradationBackground,
  SpContainer,
  SpHeaderContainer,
  SpMarginContainer,
  SpMarginContainerRelative,
  SpNameBoardStyle,
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
  // const { selectedHistoryIndex, setSelectedHistoryIndex } = useHistory(
  //   data.histories
  // );

  // const handleAboutCharacters = useCallback(() => {
  //   navigate(Url.aboutTo("characters"));
  // }, [navigate]);

  return (
    <SpContainer>
      <SpHeaderContainer bgColor={mainColor}>
        <NavigateArrow
          arrowHeight={24}
          arrowDirection="left"
          disabled={!handlePrevious}
          onClick={handlePrevious}
        />
        <NameBoard
          name={data.name}
          enName={data.enName}
          color={mainColor}
          isHeading
          className={SpNameBoardStyle}
          nameSize={calcNameSize(data.name)}
          isSp
        />
        <NavigateArrow
          arrowHeight={24}
          arrowDirection="right"
          disabled={!handleNext}
          onClick={handleNext}
        />
      </SpHeaderContainer>
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
      <GradationBackground startColor={mainColor} endColor={secondColor}>
        <SpMarginContainer>
          <CostumeList
            items={costumeList}
            color={mainColor}
            selectedColor={yellowColor}
            className={css`
              transform: translateX(-60px) scale(0.6);
            `}
          />
        </SpMarginContainer>
      </GradationBackground>
    </SpContainer>
  );
};
