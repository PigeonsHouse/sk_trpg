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
import { getStaticImageUrl } from "../utils";
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
  SpProfileDescription,
  SpProfileIcon,
  SpProfileName,
  SpProfileTagLabel,
  SpProfileTagRow,
  SpProfileTagsContainer,
  SpProfileTagValue,
  SpProfileTextBlock,
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
      <SpTopContainer backgroundUrl={getStaticImageUrl("/images/FV.png")}>
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
          className={SpBrailleBlockStyle({ bottom: 750 })}
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
            <SpAboutSectionTitle>PROFILE</SpAboutSectionTitle>
            <SpProfileIcon
              src={getStaticImageUrl("/images/SuzukiKairi/icon.png")}
              alt="鈴木乖離"
            />
            <SpProfileName>鈴木乖離</SpProfileName>
            <SpProfileTextBlock>
              <SpProfileDescription>
                {`しがないTRPGプレイヤー。好きな色は黄色。\n絵を描くのが好きなので、立ち絵をいっぱい描けるTRPGの沼にどっぷりはまってしまったよ。自PCの妄想を詰み重ねて三千里。\nキャラは社不を生みがち。生みの親が社不だからなのかも。`}
              </SpProfileDescription>
              <SpProfileTagsContainer>
                <SpProfileTagRow>
                  <SpProfileTagLabel>よく遊ぶ時間</SpProfileTagLabel>
                  <SpProfileTagValue>{`平日21:00～24:00\n休日は終日`}</SpProfileTagValue>
                </SpProfileTagRow>
                <SpProfileTagRow>
                  <SpProfileTagLabel>ゲームシステム</SpProfileTagLabel>
                  <SpProfileTagValue>CoC、エモクロア</SpProfileTagValue>
                </SpProfileTagRow>
                <SpProfileTagRow>
                  <SpProfileTagLabel>好きなシナリオ傾向</SpProfileTagLabel>
                  <SpProfileTagValue>エモシ</SpProfileTagValue>
                </SpProfileTagRow>
              </SpProfileTagsContainer>
            </SpProfileTextBlock>
            <SpSnsContainer>
              <SnsLink variant="x" circleRadius={80} />
              <SnsLink variant="skeb" circleRadius={80} />
            </SpSnsContainer>
          </SpContactSection>
        </SpMarginContainer>
      </SpAboutContainer>
    </SpBackgroundContainer>
  );
};
