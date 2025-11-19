import { useEffect, useMemo, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { useNavigate, useParams } from "react-router";
import {
  CharacterHeader,
  CostumeList,
  ProfileFrame,
  type CostumeItem,
} from "../../../components";
import { AppName } from "../../../definitions";
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

const CharacterAbout = () => {
  const navigate = useNavigate();

  const { name: characterId } = useParams();
  const [summary, setSummary] = useState<CharacterSummary[]>([]);
  const [data, setData] = useState<CharacterDetail | undefined>();
  const [previousCharacterId, setPreviousCharacterId] = useState<
    string | undefined
  >();
  const [nextCharacterId, setNextCharacterId] = useState<string | undefined>();

  const [displaySpriteIndex, setDisplaySpriteIndex] = useState(0);

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

  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const callback = () => {
      setIsScroll(window.scrollY !== 0);
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);

  const costumeList: CostumeItem[] = useMemo(() => {
    return data
      ? data.spritesUrl.map((url, index) => ({
          isSelected: displaySpriteIndex === index,
          imageUrl: url,
          onClick: () => {
            setDisplaySpriteIndex(index);
          },
        }))
      : [];
  }, [data, displaySpriteIndex, setDisplaySpriteIndex]);

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
              <MainSpriteImage src={data.spritesUrl[displaySpriteIndex]} />
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
              <CostumeList
                items={costumeList}
                color={data.colorPalette[0]}
                selectedColor={data.colorPalette[2]}
              />
            </StatusMainContainer>
          </GradationBackground>
        </Container>
      )}
    </>
  );
};

export default CharacterAbout;
