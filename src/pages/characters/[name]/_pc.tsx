import { useEffect, useMemo, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router";
import {
  CharacterHeader,
  CostumeList,
  HistoryFrame,
  ProfileFrame,
  SkillsFrame,
  StatusFrame,
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
  StatusMainContainer,
  CostumeTitle,
  CostumeTitleContainer,
  CostumeContainer,
  TwoColumnsContainer,
  LeftColumnContainer,
  RightColumnContainer,
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
  const [isScroll, setIsScroll] = useState(false);

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
      setIsScroll(window.scrollY !== 0);
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);

  const costumeList: CostumeItem[] = useMemo(() => {
    return data.spritesUrl.map((url, index) => ({
      isSelected: displaySpriteIndex === index,
      imageUrl: url,
      // MEMO: 奏 調の特殊挙動はこの辺でカスタマイズできる
      onClick: () => {
        setDisplaySpriteIndex(index);
      },
    }));
  }, [data, displaySpriteIndex, setDisplaySpriteIndex]);
  const [mainColor, secondColor, yellowColor] = useMemo(() => {
    return data.colorPalette;
  }, [data]);

  const handlePrevious = previousCharacterId
    ? () => {
        setDisplaySpriteIndex(0);
        navigate(`/characters/${previousCharacterId}`);
      }
    : undefined;
  const handleNext = nextCharacterId
    ? () => {
        setDisplaySpriteIndex(0);
        navigate(`/characters/${nextCharacterId}`);
      }
    : undefined;

  return (
    <>
      <Container>
        <CharacterHeaderContainer>
          <CharacterHeader
            name={data.name}
            enName={data.enName}
            color={mainColor}
            isSmall={isScroll}
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
            <MainSpriteImage src={data.spritesUrl[displaySpriteIndex]} />
          </ProfileMainContainer>
        </ProfileContainer>
        <GradationBackground startColor={mainColor} endColor={secondColor}>
          <StatusMainContainer>
            <CostumeContainer>
              <CostumeTitleContainer>
                <MdLocationPin size={64} color="#4B4B4B" />
                <CostumeTitle>衣装差分</CostumeTitle>
              </CostumeTitleContainer>
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
              number={data.number}
              color={mainColor}
              selectedColor={yellowColor}
            />
          </StatusMainContainer>
        </GradationBackground>
        <div
          style={{
            height: 1080,
            position: "relative",
            backgroundColor: mainColor,
            zIndex: -1,
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              height: 256,
              width: "100%",
              backgroundColor: secondColor,
            }}
          ></div>
        </div>
      </Container>
    </>
  );
};
