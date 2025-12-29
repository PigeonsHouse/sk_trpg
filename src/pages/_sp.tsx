import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  AnchorWith,
  BrailleBlock,
  CharacterCard,
  MenuBoard,
  SnsLink,
} from "../components";
import { UiColor } from "../definitions";
import { useGetSummary } from "../hooks";
import {
  SpAboutCharactersSection,
  SpAboutContainer,
  SpAboutDescription,
  SpAboutDescriptionSection,
  SpAboutSectionTitle,
  SpBackgroundContainer,
  SpBrailleBlockStyle,
  SpCharacterCardsContainer,
  SpCharacterCardStyle,
  SpContactSection,
  SpMarginContainer,
  SpMenuBoardStyle,
  SpSnsContainer,
  SpTopContainer,
  SpTopFilter,
  SpTopTitle,
  SpTopTitleContainer,
} from "./styled";

const brailleBlockProps = {
  blockColor: UiColor.yellow,
  blockLength: 66,
  gap: 2,
  orientation: "horizontal",
} as const;

export const SpTop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // PCページからのリサイズや直接URL指定時にスクロール位置を調整
    const vh = document.documentElement.clientHeight;
    const isManual = !location.state?.fromScroll;
    if (window.location.pathname === "/about" && window.location.hash === "") {
      const isNotAtTarget = window.scrollY < vh / 2;
      if (isNotAtTarget || isManual) {
        window.scrollBy({
          top: vh - window.scrollY,
          behavior: "smooth",
        });
      }
    } else if (window.location.pathname === "/") {
      const isNotAtTarget = window.scrollY > vh / 2;
      if (isNotAtTarget || isManual) {
        window.scrollBy({
          top: -window.scrollY,
          behavior: "smooth",
        });
      }
    }
  }, [location.pathname]);
  useEffect(() => {
    // TOPページのDOM(100vh部分)半分過ぎたらURLを書き換える
    const callback = () => {
      if (!["/", "/about"].includes(window.location.pathname)) return;
      const targetPath =
        window.scrollY > document.documentElement.clientHeight / 2
          ? "/about"
          : "/";
      if (window.location.pathname !== targetPath) {
        navigate(targetPath, { replace: true, state: { fromScroll: true } });
      }
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, [navigate]);

  const { data: summary } = useGetSummary();

  return (
    <SpBackgroundContainer>
      <MenuBoard isSp className={SpMenuBoardStyle} />
      <SpTopContainer backgroundUrl={undefined}>
        <SpTopFilter>
          <SpMarginContainer>
            <SpTopTitleContainer>
              <SpTopTitle>{`鈴木乖離の\n探索者サイト`}</SpTopTitle>
            </SpTopTitleContainer>
          </SpMarginContainer>
        </SpTopFilter>
      </SpTopContainer>
      <SpAboutContainer>
        <BrailleBlock
          className={SpBrailleBlockStyle({ top: 280 })}
          {...brailleBlockProps}
        />
        <BrailleBlock
          className={SpBrailleBlockStyle({ bottom: 520 })}
          {...brailleBlockProps}
        />
        <SpMarginContainer>
          <SpAboutDescriptionSection>
            <AnchorWith id="about" offset={-116}>
              <SpAboutSectionTitle>Where is this?</SpAboutSectionTitle>
            </AnchorWith>
            <SpAboutDescription>
              {`鈴木乖離という人間が\nTRPGで生み出した探索者のまとめサイトです。\nかわいいうちの子を見て行ってください～！`}
            </SpAboutDescription>
          </SpAboutDescriptionSection>
          <SpAboutCharactersSection>
            <AnchorWith id="characters" offset={-116}>
              <SpAboutSectionTitle>CHARACTER</SpAboutSectionTitle>
            </AnchorWith>
            <SpCharacterCardsContainer>
              {summary
                ?.filter((character) => !character.original)
                .map((character) => (
                  <CharacterCard
                    key={character.id}
                    data={character}
                    className={SpCharacterCardStyle}
                    isSp
                  />
                ))}
            </SpCharacterCardsContainer>
          </SpAboutCharactersSection>
          <SpContactSection>
            <SpAboutSectionTitle>CONTACT</SpAboutSectionTitle>
            <SpSnsContainer>
              <SnsLink variant="x" circleRadius={128} />
              <SnsLink variant="skeb" circleRadius={128} />
            </SpSnsContainer>
          </SpContactSection>
        </SpMarginContainer>
      </SpAboutContainer>
    </SpBackgroundContainer>
  );
};
