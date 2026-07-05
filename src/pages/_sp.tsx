import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  AnchorWith,
  BrailleBlock,
  CharacterCard,
  MenuBoard,
  SnsLink,
} from "../components";
import { characterSummaries } from "../content";
import { UiColor } from "../definitions";
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

  return (
    <SpBackgroundContainer>
      <MenuBoard isSp className={SpMenuBoardStyle} />
      <SpTopContainer backgroundUrl="/images/FV.png">
        <SpTopFilter>
          <SpMarginContainer>
            <SpTopTitleContainer>
              <SpTopTitle>{`KAIRI\nSTATION`}</SpTopTitle>
            </SpTopTitleContainer>
          </SpMarginContainer>
        </SpTopFilter>
      </SpTopContainer>
      <SpAboutContainer>
        <BrailleBlock
          className={SpBrailleBlockStyle({ top: 400 })}
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
              {`鈴木乖離という人間がTRPGで生み出したプレイキャラクターのまとめサイトです。\n\nサイトテーマは「駅」です。\nキャラクターの歩んできた物語を「停車駅」に見立て、彼らの人生という旅路の一端を記録しています。\n\n自慢の我が子達をぜひ見てってください！`}
            </SpAboutDescription>
          </SpAboutDescriptionSection>
          <SpAboutCharactersSection>
            <AnchorWith id="characters" offset={-116}>
              <SpAboutSectionTitle>CHARACTER</SpAboutSectionTitle>
            </AnchorWith>
            <SpCharacterCardsContainer>
              {characterSummaries
                .filter((character) => !character.original)
                .map((character) => (
                  <CharacterCard
                    key={character.id}
                    data={character}
                    className={SpCharacterCardStyle}
                    isSp
                    borderWidth={2}
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
