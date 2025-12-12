import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { css, cx } from "@emotion/css";
import {
  CommonFrame,
  CostumeList,
  GoogleFontIcon,
  LabelBox,
  MenuBoard,
  NameBoard,
  NavigateArrow,
  ShortIdBoard,
  SingleLight,
  TrafficLight,
} from "../../../components";
import { CharactersId, FontWeight, UiColor } from "../../../definitions";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import { arraySplitByCount, calcNameSize } from "../../../utils";
import { useHeader, useSprites } from "./index.app";
import {
  CostumeTitleContainer,
  GradationInnerContainer,
  SpBackdrop,
  SpCommonFrameStyle,
  SpContainer,
  SpCostumeContainer,
  SpCostumeStyle,
  SpCostumeTitle,
  SpDescription,
  SpFrameTitle,
  SpGradationBackground,
  SpHeaderContainer,
  SpLabelAreaContainer,
  SpLabelContainer,
  SpLabelStyle,
  SpMarginContainer,
  SpMarginContainerRelative,
  SpMenuBoardStyle,
  SpNameBoardStyle,
  SpQuestionContainer,
  SpShortIdBoardStyle,
  SpSingleLightStyle,
  SpSkillsFrameStyle,
  SpSprite,
  SpSpriteContainer,
  SpStatusLabelContainerStyle,
  SpStatusLabelStyle,
  SpTrafficLightStyle,
  SpWhiteOut,
  SpWhiteOutContainer,
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

  const [isSkillOpen, setIsSkillOpen] = useState(false);
  useEffect(() => {
    setIsSkillOpen(false);
  }, [characterId]);

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
      <SpGradationBackground startColor={mainColor} endColor={secondColor}>
        <SpMarginContainer>
          <GradationInnerContainer>
            <SpCostumeContainer>
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
            </SpCostumeContainer>
            <CommonFrame className={SpCommonFrameStyle}>
              <SpFrameTitle>プロフィール</SpFrameTitle>
              <div>
                <SpDescription>{data.profile.description}</SpDescription>
              </div>
              <SpLabelAreaContainer>
                {Object.entries(data.profile)
                  .filter(([key]) => key !== "description")
                  .map(([key, profileData]) => (
                    <SpLabelContainer key={key}>
                      <LabelBox
                        backgroundColor={mainColor}
                        className={SpLabelStyle}
                      >
                        {key.toUpperCase()}
                      </LabelBox>
                      <span>{profileData}</span>
                    </SpLabelContainer>
                  ))}
              </SpLabelAreaContainer>
            </CommonFrame>
            <CommonFrame className={SpCommonFrameStyle}>
              <SpFrameTitle withBorder>
                ステータス：{data.status.type}
              </SpFrameTitle>
              <div
                style={{ display: "flex", justifyContent: "center", gap: 24 }}
              >
                {arraySplitByCount(
                  Object.entries(data.status).filter(([key]) => key !== "type"),
                  2
                ).map((splittedStatus, i) => (
                  <SpLabelAreaContainer key={i}>
                    {splittedStatus.map(([key, profileData]) => (
                      <SpLabelContainer
                        key={key}
                        className={SpStatusLabelContainerStyle}
                      >
                        <LabelBox
                          backgroundColor={mainColor}
                          className={SpStatusLabelStyle}
                        >
                          {key.toUpperCase()}
                        </LabelBox>
                        <span>{profileData}</span>
                      </SpLabelContainer>
                    ))}
                  </SpLabelAreaContainer>
                ))}
              </div>
            </CommonFrame>
            <CommonFrame className={cx(SpCommonFrameStyle, SpSkillsFrameStyle)}>
              <SpFrameTitle withBorder>技能値</SpFrameTitle>
              <div>
                <SpWhiteOutContainer open={isSkillOpen}>
                  <SpLabelAreaContainer>
                    {Object.entries(data.skills).map(([key, skillData]) => (
                      <SpLabelContainer key={key}>
                        <LabelBox
                          backgroundColor={mainColor}
                          className={SpLabelStyle}
                        >
                          {key.toUpperCase()}
                        </LabelBox>
                        <span>{skillData}</span>
                      </SpLabelContainer>
                    ))}
                    <SpWhiteOut open={isSkillOpen} />
                  </SpLabelAreaContainer>
                </SpWhiteOutContainer>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    display: "flex",
                    width: "100%",
                    height: 56,
                    fontSize: 16,
                    fontWeight: FontWeight.Bold,
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 16,
                    color: UiColor.gray,
                  }}
                  onClick={() => setIsSkillOpen((prev) => !prev)}
                >
                  {isSkillOpen ? "とじる" : "ひらく"}
                  <GoogleFontIcon
                    iconName="arrow_drop_down"
                    size={24}
                    className={
                      isSkillOpen
                        ? css`
                            transform: rotate(180deg);
                          `
                        : undefined
                    }
                  />
                </button>
              </div>
            </CommonFrame>
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
          </GradationInnerContainer>
        </SpMarginContainer>
      </SpGradationBackground>
      <SpQuestionContainer bgColor={mainColor}>
        <SpMarginContainer>
          <CommonFrame className={SpCommonFrameStyle}>
            <SpFrameTitle
              style={{ justifyContent: "center", textAlign: "center" }}
            >
              突撃！
              <br />
              探索者にインタビュー
            </SpFrameTitle>
            <div>Q 休日何してる？</div>
          </CommonFrame>
        </SpMarginContainer>
      </SpQuestionContainer>
    </SpContainer>
  );
};
