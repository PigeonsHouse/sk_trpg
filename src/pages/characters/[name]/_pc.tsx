import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router";
import {
  ArtGallery,
  BottomNavigator,
  CharacterHeader,
  CommentFrame,
  CostumeList,
  HistoryFrame,
  ProfileFrame,
  QAFrame,
  SkillsFrame,
  StatusFrame,
  Window,
} from "../../../components";
import { Url, type CharactersId } from "../../../definitions";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import { useHeader, useHistory, useSprites } from "./index.app";
import {
  CharacterHeaderContainer,
  Container,
  ProfileMainContainer,
  ProfileFrameStyle,
  BackgroundImage,
  ProfileContainer,
  MainSpriteImage,
  GradationBackground,
  CostumeContainer,
  TwoColumnsContainer,
  LeftColumnContainer,
  RightColumnContainer,
  LeftWindowStyle,
  RightWindowStyle,
  TrainBody,
  BrailleBlock,
  RoadBackGround,
  MarginContainer,
} from "./styled";

type PcCharacterAboutProps = {
  summary: CharacterSummary[];
  characterId: CharactersId;
  index: number;
  data: CharacterDetail;
};

export const PcCharacterAbout: React.FC<PcCharacterAboutProps> = ({
  summary,
  characterId,
  index,
  data,
}) => {
  const navigate = useNavigate();

  const [mainColor, secondColor, yellowColor] = useMemo(() => {
    return data.colorPalette;
  }, [data]);

  const { isHeaderShrink, handlePrevious, handleNext } = useHeader(
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
  const { selectedHistoryIndex, setSelectedHistoryIndex } = useHistory(
    data.histories
  );

  const handleAboutCharacters = useCallback(() => {
    navigate(Url.aboutTo("characters"));
  }, [navigate]);

  return (
    <>
      <Container>
        <CharacterHeaderContainer isShrink={isHeaderShrink}>
          <CharacterHeader
            name={data.name}
            enName={data.enName}
            color={mainColor}
            isShrink={isHeaderShrink}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        </CharacterHeaderContainer>
        <ProfileContainer>
          <BackgroundImage src={data.backgroundUrl} />
          <ProfileMainContainer>
            <ProfileFrame
              className={ProfileFrameStyle}
              color={mainColor}
              profileData={data.profile}
            />
            <MainSpriteImage src={data.sprites[displaySpriteIndex].spriteUrl} />
          </ProfileMainContainer>
        </ProfileContainer>
        <GradationBackground startColor={mainColor} endColor={secondColor}>
          <MarginContainer>
            <CostumeContainer>
              <CostumeList
                items={costumeList}
                color={mainColor}
                selectedColor={yellowColor}
              />
            </CostumeContainer>
            <TwoColumnsContainer>
              <LeftColumnContainer>
                <StatusFrame
                  status={data.status}
                  colorPalette={data.colorPalette}
                />
              </LeftColumnContainer>
              <RightColumnContainer>
                <SkillsFrame
                  skills={data.skills}
                  colorPalette={data.colorPalette}
                />
              </RightColumnContainer>
            </TwoColumnsContainer>
            <HistoryFrame
              selectedIndex={selectedHistoryIndex}
              changeIndex={setSelectedHistoryIndex}
              histories={data.histories}
              shortId={data.shortId}
              number={index}
              color={mainColor}
              selectedColor={yellowColor}
            />
          </MarginContainer>
        </GradationBackground>
        <TrainBody mainColor={mainColor} secondColor={secondColor}>
          <Window
            className={LeftWindowStyle}
            colorPalette={data.colorPalette}
          />
          <Window
            className={RightWindowStyle}
            colorPalette={data.colorPalette}
          />
          <QAFrame qaList={data.qaList} color={mainColor} />
        </TrainBody>
        <RoadBackGround>
          <MarginContainer>
            <BrailleBlock blockColor={yellowColor} />
            <CommentFrame comment={data.comment} />
            {data.artGallery.length > 0 && (
              <MarginContainer>
                <ArtGallery artGallery={data.artGallery} />
              </MarginContainer>
            )}
          </MarginContainer>
          <BottomNavigator
            color={mainColor}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            handleAboutCharacters={handleAboutCharacters}
          />
        </RoadBackGround>
      </Container>
    </>
  );
};
