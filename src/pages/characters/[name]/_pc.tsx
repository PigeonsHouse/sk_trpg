import { useEffect, useMemo, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router";
import { css } from "@emotion/css";
import {
  CharacterHeader,
  CommonFrame,
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
            zIndex: 0,
            padding: "80px 0",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              height: 256,
              width: "100%",
              backgroundColor: secondColor,
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 160,
              width: 720,
              height: 360,
              border: "40px solid #DCEBEE",
              borderRadius: 60,
              left: "calc(50% - 800px - 440px - 40px)",
              background: `linear-gradient(135deg, ${mainColor}, ${secondColor})`,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 250,
                height: 300,
                width: "100%",
                backgroundColor: "rgb(255 255 255 / 0.25)",
                transform: "rotate(12.5deg) scaleX(2)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "calc(50% - 20px)",
                width: 40,
                bottom: 0,
                backgroundColor: "#DCEBEE",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: 160,
              width: 720,
              height: 360,
              border: "40px solid #DCEBEE",
              borderRadius: 60,
              right: "calc(50% - 800px - 440px - 40px)",
              background: `linear-gradient(135deg, ${mainColor}, ${secondColor})`,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 250,
                height: 300,
                width: "100%",
                backgroundColor: "rgb(255 255 255 / 0.25)",
                transform: "rotate(12.5deg) scaleX(2)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "calc(50% - 20px)",
                width: 40,
                bottom: 0,
                backgroundColor: "#DCEBEE",
              }}
            />
          </div>

          <CommonFrame
            className={css`
              width: 880px;
              margin: auto;
              padding: 40px 100px;
              flex-grow: 1;
              z-index: 2;
              box-sizing: border-box;
            `}
          >
            <h3
              style={{
                textAlign: "center",
                margin: 0,
                fontSize: 64,
                marginBottom: 48,
              }}
            >
              Q&A
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {data.qa.map((questionAndAnswer) => {
                return (
                  <div style={{ fontSize: 24, fontWeight: "bold" }}>
                    <div style={{ marginBottom: 8 }}>
                      Q. {questionAndAnswer.question}
                    </div>
                    <div>A. {questionAndAnswer.answer}</div>
                  </div>
                );
              })}
            </div>
          </CommonFrame>
        </div>
      </Container>
    </>
  );
};
