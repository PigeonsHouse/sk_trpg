import { useCallback, useEffect, useMemo, useState } from "react";
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
  type CostumeItem,
} from "../../../components";
import type { CharacterDetail, CharacterSummary } from "../../../types";
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
  characterId: string;
  data: CharacterDetail;
};

export const PcCharacterAbout: React.FC<PcCharacterAboutProps> = ({
  characterId,
  data,
}) => {
  const navigate = useNavigate();

  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  const [previousCharacterId, setPreviousCharacterId] = useState<
    string | undefined
  >();
  const [nextCharacterId, setNextCharacterId] = useState<string | undefined>();
  const [displaySpriteIndex, setDisplaySpriteIndex] = useState(0);
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const safeDisplaySpriteIndex = Math.min(
    displaySpriteIndex,
    data.sprites.length - 1
  );
  const safeSelectedHistoryIndex = Math.min(
    selectedHistoryIndex,
    data.histories.length - 1
  );

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  useEffect(() => {
    let prevId: string | undefined = undefined;
    let nextId: string | undefined = undefined;
    let isFind = false;
    summary.map((summaryData) => {
      if (summaryData.id === characterId) {
        isFind = true;
      } else if (isFind && nextId === undefined) {
        nextId = summaryData.id;
      }
      if (!isFind) {
        prevId = summaryData.id;
      }
    });
    setPreviousCharacterId(prevId);
    setNextCharacterId(nextId);
  }, [data, summary]);
  useEffect(() => {
    const callback = () => {
      setIsScrolled(window.scrollY !== 0);
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);

  useEffect(() => {
    switch (characterId) {
      case "kanade-shirabe-adult":
        if (displaySpriteIndex === 0) {
          setDisplaySpriteIndex(1);
        }
        break;
      case "kanade-shirabe-student":
        if (displaySpriteIndex === 0) {
          setDisplaySpriteIndex(1);
        }
        break;
      default:
        setDisplaySpriteIndex(0);
    }
  }, [characterId]);

  const costumeList: CostumeItem[] = useMemo(() => {
    return data.sprites.map((url, index) => ({
      isSelected: displaySpriteIndex === index,
      imageUrl: url.iconUrl,
      onClick: () => {
        scrollTo({ top: 0, behavior: "smooth" });
        switch (characterId) {
          case "kanade-shirabe":
            if (url.iconUrl.includes("hide")) {
              setDisplaySpriteIndex(1);
              navigate("/characters/kanade-shirabe-student");
            } else {
              setDisplaySpriteIndex(index);
              navigate("/characters/kanade-shirabe-adult");
            }
            return;
          case "kanade-shirabe-student":
            setDisplaySpriteIndex(0);
            navigate("/characters/kanade-shirabe");
            return;
          case "kanade-shirabe-adult":
            if (url.iconUrl.includes("hide")) {
              setDisplaySpriteIndex(1);
              navigate("/characters/kanade-shirabe-student");
              return;
            } else if (index === 0) {
              setDisplaySpriteIndex(index);
              navigate("/characters/kanade-shirabe");
              return;
            }
            break;
          default:
            break;
        }
        setDisplaySpriteIndex(index);
      },
    }));
  }, [data, displaySpriteIndex, setDisplaySpriteIndex]);
  const [mainColor, secondColor, yellowColor] = useMemo(() => {
    return data.colorPalette;
  }, [data]);

  const handlePrevious =
    previousCharacterId && !data.hide
      ? () => {
          setDisplaySpriteIndex(0);
          navigate(`/characters/${previousCharacterId}`);
          scrollTo(0, 0);
        }
      : undefined;
  const handleNext =
    nextCharacterId && !data.hide
      ? () => {
          setDisplaySpriteIndex(0);
          navigate(`/characters/${nextCharacterId}`);
          scrollTo(0, 0);
        }
      : undefined;

  const handleAboutCharacters = useCallback(() => {
    navigate("/about#characters");
  }, [navigate]);

  return (
    <>
      <Container>
        <CharacterHeaderContainer isShrink={isScrolled}>
          <CharacterHeader
            name={data.name}
            enName={data.enName}
            color={mainColor}
            isShrink={isScrolled}
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
            <MainSpriteImage
              src={data.sprites[safeDisplaySpriteIndex].spriteUrl}
            />
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
              selectedIndex={safeSelectedHistoryIndex}
              changeIndex={setSelectedHistoryIndex}
              histories={data.histories}
              shortId={data.shortId}
              number={data.number}
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
            <BrailleBlock color={yellowColor} />
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
