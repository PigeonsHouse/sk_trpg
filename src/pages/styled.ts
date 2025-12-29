import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontFamily, FontWeight, SP_MAX_WIDTH, UiColor } from "../definitions";
import { withAlpha } from "../utils";

export const TopPageContainer = styled.div`
  position: relative;
  height: 100dvh;
  overflow-x: auto;
`;

export const TopBackgroundContainer = styled.div`
  display: flex;
  min-width: fit-content;
  height: 100%;
  background:
    repeating-linear-gradient(
      90deg,
      ${UiColor.lightGray},
      ${UiColor.lightGray} 2px,
      transparent 1px,
      transparent 440px
    ),
    linear-gradient(
      0deg,
      transparent,
      transparent 150px,
      ${UiColor.lightGray} 151px,
      ${UiColor.lightGray} 151px,
      transparent 152px
    ),
    linear-gradient(
      0deg,
      transparent,
      transparent 340px,
      ${UiColor.lightGray} 341px,
      ${UiColor.lightGray} 341px,
      transparent 342px
    );
`;

export const TopItemContainer = styled.div`
  display: flex;
  padding-top: 200px;
  padding-left: 48px;
  gap: 40px;
  align-items: flex-start;
`;

export const CharacterCardStyle = css`
  width: 672px;
  &:last-child {
    margin-right: 320px;
  }
`;

// SPスタイル

export const SpBackgroundContainer = styled.div`
  background:
    repeating-linear-gradient(
      transparent,
      transparent 240px,
      ${UiColor.gray} 241px,
      ${UiColor.gray} 241px
    ),
    repeating-linear-gradient(
      270deg,
      transparent,
      transparent 360px,
      ${UiColor.gray} 361px,
      ${UiColor.gray} 361px
    );
`;

export const SpMarginContainer = styled.div`
  width: 100%;
  max-width: ${SP_MAX_WIDTH}px;
  margin: auto;
  height: 100%;
`;

export const SpMenuBoardStyle = css`
  position: fixed;
  right: calc(max(calc((100% - ${SP_MAX_WIDTH}px) / 2), 0px) + 16px);
  z-index: 50;
`;

export const SpTopContainer = styled.section<{ backgroundUrl?: string }>`
  position: relative;
  height: 100dvh;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  ${(props) =>
    props.backgroundUrl
      ? `background-image: url(${props.backgroundUrl});`
      : undefined}
  // 画像が未指定なので仮で黒背景を置いている
  background-color: black;
`;

export const SpTopFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${withAlpha(UiColor.white, 0.75)};
`;

export const SpTopTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SpTopTitle = styled.h1`
  margin: 0;
  white-space: pre-wrap;
  font-family: ${FontFamily.Header};
  font-size: 48px;
  margin-left: 16px;
`;

export const SpAboutContainer = styled.section`
  position: relative;
`;

export const SpBrailleBlockStyle = ({
  top,
  bottom,
}: {
  top?: number;
  bottom?: number;
}) => css`
  ${top ? `top: ${top}px;` : undefined}
  ${bottom ? `bottom: ${bottom}px;` : undefined}
  left: 0;
  right: 0;
`;

export const SpAboutDescriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  padding-top: 56px;
  margin-bottom: 200px;
`;

export const SpAboutSectionTitle = styled.h2`
  margin: 0;
  font-size: 32px;
  font-family: ${FontFamily.Header};
  text-align: center;
  letter-spacing: 2px;
`;

export const SpAboutDescription = styled.p`
  margin: 0;
  white-space: pre-wrap;
  font-size: 12px;
  font-weight: ${FontWeight.Bold};
  text-align: center;
  line-height: 2;
`;

export const SpAboutCharactersSection = styled.section`
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const SpCharacterCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const SpCharacterCardStyle = css`
  width: 320px;
`;

export const SpContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin-bottom: 32px;
`;

export const SpSnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
