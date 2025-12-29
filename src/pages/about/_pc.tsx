import { useEffect, useMemo, useRef, useState } from "react";
import {
  AnchorWith,
  CharacterCard,
  HeadBoard,
  MenuBoard,
  SnsLink,
  TopGuideBoard,
} from "../../components";
import { BREAK_POINT } from "../../definitions";
import { useGetSummary } from "../../hooks";
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
  SectionTitle,
  SnsLinksContainer,
  StickyContainer,
  StickyMenuBoardStyle,
  StickyTopGuideBoardStyle,
} from "./styled";

export const PcAbout = () => {
  const { data: summary, isPending } = useGetSummary();

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
          <AnchorWith id="about" offset={-280} disabledScroll={isPending}>
            <AboutTitle>What is this place?</AboutTitle>
          </AnchorWith>
          <AboutDescription>
            {`鈴木乖離という人間が\nTRPGで生み出した探索者のまとめサイトです。\nかわいいうちの子を見ていってください～！`}
          </AboutDescription>
        </AboutSection>
        <CharactersSection>
          <AnchorWith id="characters" offset={-200} disabledScroll={isPending}>
            <SectionTitle>CHARACTER</SectionTitle>
          </AnchorWith>
          {summary ? (
            <CharacterCardsContainer>
              {summary
                .filter((character) => !character.original)
                .map((character) => (
                  <CharacterCard
                    key={character.id}
                    data={character}
                    className={CharacterCardStyle}
                  />
                ))}
            </CharacterCardsContainer>
          ) : null}
        </CharactersSection>
        <ContactSection>
          <SectionTitle>CONTACT</SectionTitle>
          <SnsLinksContainer>
            <SnsLink variant="x" circleRadius={200} />
            <SnsLink variant="skeb" circleRadius={200} />
          </SnsLinksContainer>
        </ContactSection>
      </MainContentsContainer>

      <HeadBoardContainer>
        <HeadBoard label="このサイトは何？" enLabel="What is this place?" />
      </HeadBoardContainer>
      <BrailleBlock top={720} />
      <BrailleBlock bottom={640} />
    </Container>
  );
};
