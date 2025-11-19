import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import { CharacterHeader, ProfileFrame } from "../../../components";
import type { CharacterDetail, CharacterSummary } from "../../../types";
import {
  CharacterHeaderContainer,
  Container,
  Loading,
  ProfileMainContainer,
  ProfileFrameStyle,
  BackgroundImage,
  ProfileContainer,
  MainSpriteImage,
  GradationBackground,
  StatusMainContainer,
  CostumeTitle,
  CostumeTitleContainer,
} from "./styled";
import { AppName } from "../../../definitions";

const CharacterAbout = () => {
  const navigate = useNavigate();

  const { name: characterId } = useParams();
  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  const [data, setData] = useState<CharacterDetail | undefined>();
  const [previousCharacterId, setPreviousCharacterId] = useState<
    string | undefined
  >();
  const [nextCharacterId, setNextCharacterId] = useState<string | undefined>();

  const [displaySprite, setDisplaySprite] = useState<string | undefined>();

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters.json`)
      .then((res) => res.json())
      .then((data) => setSummary(data));
  }, []);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/characters/${characterId}.json`)
      .then((res) => res.json())
      .then((data) => {
        const castedData = data as CharacterDetail;
        setData(castedData);
        setDisplaySprite(castedData.spritesUrl[0]);

        let prevId: string | undefined = undefined;
        let nextId: string | undefined = undefined;
        let isFind = false;
        summary.map((data) => {
          if (data.id === characterId) {
            isFind = true;
          } else if (isFind && nextId === undefined) {
            nextId = data.id;
          }
          if (!isFind) {
            prevId = data.id;
          }
        });
        setPreviousCharacterId(prevId);
        setNextCharacterId(nextId);
      });
  }, [characterId, summary]);

  const isLoading = data === undefined;
  const title = data
    ? `${data.name} - ${AppName}`
    : `キャラクター - ${AppName}`;

  const handlePrevious = previousCharacterId
    ? () => {
        navigate(`/characters/${previousCharacterId}`);
      }
    : undefined;
  const handleNext = nextCharacterId
    ? () => {
        navigate(`/characters/${nextCharacterId}`);
      }
    : undefined;

  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const callback = () => {
      setIsScroll(window.scrollY !== 0);
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);

  return (
    <>
      <title>{title}</title>
      {isLoading ? (
        <Loading>isLoading...</Loading>
      ) : (
        <Container>
          <CharacterHeaderContainer>
            <CharacterHeader
              name={data.name}
              enName={data.enName}
              color={data.colorPalette[0]}
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
                color={data.colorPalette[0]}
                profileData={data.profile}
              />
              {displaySprite && <MainSpriteImage src={displaySprite} />}
            </ProfileMainContainer>
          </ProfileContainer>
          <GradationBackground
            startColor={data.colorPalette[0]}
            endColor={data.colorPalette[1]}
          >
            <StatusMainContainer>
              <CostumeTitleContainer>
                <MdLocationPin size={64} color="#4B4B4B" />
                <CostumeTitle>衣装差分</CostumeTitle>
              </CostumeTitleContainer>
            </StatusMainContainer>
          </GradationBackground>
        </Container>
      )}
    </>
  );
};

export default CharacterAbout;
