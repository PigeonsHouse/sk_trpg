import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnchorWith,
  CharacterCard,
  HeadBoard,
  MenuBoard,
  SnsLink,
  TopGuideBoard,
} from "../../components";
import { characterSummaries } from "../../content";
import { BREAK_POINT } from "../../definitions";
import { getStaticImageUrl } from "../../utils";
import {
  AboutDescription,
  AboutSection,
  AboutTitle,
  BrailleBlock,
  CharacterCardsContainer,
  CharacterCardStyle,
  CharactersSection,
  ContactSection,
  Container,
  HeadBoardContainer,
  MainContentsContainer,
  ProfileDescription,
  ProfileIcon,
  ProfileIconColumn,
  ProfileInfoColumn,
  ProfileName,
  ProfileRow,
  ProfileTagLabel,
  ProfileTagRow,
  ProfileTagsContainer,
  ProfileTagValue,
  ProfileTextBlock,
  SectionTitle,
  SnsLinksContainer,
  StickyContainer,
  StickyMenuBoardStyle,
  StickyTopGuideBoardStyle,
} from "./styled";

export const PcAbout = () => {
  const guideBoardRef = useRef<HTMLDivElement | null>(null);
  const guideBoardWidth = useMemo(() => {
    if (!guideBoardRef.current) return 0;
    return guideBoardRef.current.offsetWidth;
  }, [guideBoardRef.current]);
  const [isHideBoard, setIsHideBoard] = useState(true);
  useEffect(() => {
    const calcBreakPoint = () => {
      if (guideBoardWidth === 0) return;
      setIsHideBoard(window.innerWidth < BREAK_POINT + guideBoardWidth);
    };

    calcBreakPoint();
    window.addEventListener("resize", calcBreakPoint);
    return () => window.removeEventListener("resize", calcBreakPoint);
  }, [guideBoardWidth, setIsHideBoard]);

  return (
    <Container>
      <MainContentsContainer
        isHideBoard={isHideBoard}
        guideBoardWidth={guideBoardWidth}
      >
        <StickyContainer>
          <MenuBoard
            disabled={!isHideBoard}
            className={StickyMenuBoardStyle(isHideBoard, guideBoardWidth)}
          />
          <TopGuideBoard
            ref={guideBoardRef}
            className={StickyTopGuideBoardStyle(isHideBoard, guideBoardWidth)}
          />
        </StickyContainer>
        <AboutSection>
          <AnchorWith id="about" offset={-280}>
            <AboutTitle>What is this place?</AboutTitle>
          </AnchorWith>
          <AboutDescription>
            {`鈴木乖離という人間がTRPGで生み出したプレイキャラクターのまとめサイトです。\n\nサイトテーマは「駅」です。\nキャラクターの歩んできた物語を「停車駅」に見立て、彼らの人生という旅路の一端を記録しています。\n\n自慢の我が子達をぜひ見てってください！`}
          </AboutDescription>
        </AboutSection>
        <CharactersSection>
          <AnchorWith id="characters" offset={-200}>
            <SectionTitle>CHARACTER</SectionTitle>
          </AnchorWith>
          <CharacterCardsContainer>
            {characterSummaries
              .filter((character) => !character.original)
              .map((character) => (
                <CharacterCard
                  key={character.id}
                  data={character}
                  className={CharacterCardStyle}
                  borderWidth={2}
                />
              ))}
          </CharacterCardsContainer>
        </CharactersSection>
        <ContactSection>
          <SectionTitle>PROFILE</SectionTitle>
          <ProfileRow>
            <ProfileIconColumn>
              <ProfileIcon
                src={getStaticImageUrl("/images/SuzukiKairi/icon.png")}
                alt="鈴木乖離"
              />
              <ProfileName>鈴木乖離</ProfileName>
            </ProfileIconColumn>
            <ProfileInfoColumn>
              <ProfileTextBlock>
                <ProfileDescription>
                  {`しがないTRPGプレイヤー。好きな色は黄色。\n絵を描くのが好きなので、立ち絵をいっぱい描けるTRPGの沼にどっぷりはまってしまったよ。自PCの妄想を詰み重ねて三千里。\nキャラは社不を生みがち。生みの親が社不だからなのかも。`}
                </ProfileDescription>
                <ProfileTagsContainer>
                  <ProfileTagRow>
                    <ProfileTagLabel>よく遊ぶ時間</ProfileTagLabel>
                    <ProfileTagValue>{`平日21:00～24:00\n休日は終日`}</ProfileTagValue>
                  </ProfileTagRow>
                  <ProfileTagRow>
                    <ProfileTagLabel>ゲームシステム</ProfileTagLabel>
                    <ProfileTagValue>CoC、エモクロア</ProfileTagValue>
                  </ProfileTagRow>
                  <ProfileTagRow>
                    <ProfileTagLabel>好きなシナリオ傾向</ProfileTagLabel>
                    <ProfileTagValue>エモシ</ProfileTagValue>
                  </ProfileTagRow>
                </ProfileTagsContainer>
              </ProfileTextBlock>
              <SnsLinksContainer>
                <SnsLink variant="x" circleRadius={80} />
                <SnsLink variant="skeb" circleRadius={80} />
              </SnsLinksContainer>
            </ProfileInfoColumn>
          </ProfileRow>
        </ContactSection>
      </MainContentsContainer>

      <HeadBoardContainer>
        <HeadBoard label="このサイトは何？" enLabel="What is this place?" />
      </HeadBoardContainer>
      <BrailleBlock top={800} />
      <BrailleBlock bottom={920} />
    </Container>
  );
};
