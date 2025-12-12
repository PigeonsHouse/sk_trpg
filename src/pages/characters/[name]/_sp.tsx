import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import {
  CostumeList,
  GoogleFontIcon,
  MenuBoard,
  NameBoard,
  NavigateArrow,
  ShortIdBoard,
  SingleLight,
  TrafficLight,
} from "../../../components";
import { CharactersId, UiColor } from "../../../definitions";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import { calcNameSize } from "../../../utils";
import { useHeader, useSprites } from "./index.app";
import {
  CostumeTitleContainer,
  GradationBackground,
  SpBackdrop,
  SpContainer,
  SpCostumeStyle,
  SpCostumeTitle,
  SpHeaderContainer,
  SpMarginContainer,
  SpMarginContainerRelative,
  SpMenuBoardStyle,
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

  const [isBackdropOpen, setIsBackdropOpen] = useState(false);
  const onBackdropClose = useCallback(
    () => setIsBackdropOpen(false),
    [setIsBackdropOpen]
  );

  return (
    <SpContainer>
      <SpBackdrop open={isBackdropOpen} onClick={onBackdropClose} />
      <SpHeaderContainer bgColor={mainColor}>
        <NavigateArrow
          arrowHeight={24}
          arrowDirection="left"
          disabled={!handlePrevious}
          onClick={handlePrevious}
        />
        <NameBoard
          isHeading
          name={data.name}
          enName={data.enName}
          color={mainColor}
          nameSize={calcNameSize(data.name)}
          className={SpNameBoardStyle}
          isSp
        />
        <NavigateArrow
          arrowHeight={24}
          arrowDirection="right"
          disabled={!handleNext}
          onClick={handleNext}
        />
        <MenuBoard
          isOpen={isBackdropOpen}
          setIsOpen={setIsBackdropOpen}
          className={SpMenuBoardStyle}
          isSp
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
          <CostumeTitleContainer>
            <GoogleFontIcon
              iconName="fmd_good"
              size={32}
              color={UiColor.darkGray}
            />
            <SpCostumeTitle>衣装差分</SpCostumeTitle>
          </CostumeTitleContainer>
          <CostumeList
            items={costumeList}
            color={mainColor}
            selectedColor={yellowColor}
            className={SpCostumeStyle}
            isSp
          />
        </SpMarginContainer>
      </GradationBackground>
    </SpContainer>
  );
};
