import { css } from "@emotion/css";
import styled from "@emotion/styled";
import {
  BREAK_POINT,
  FontFamily,
  FontWeight,
  UiColor,
} from "../../definitions";

export const Container = styled.div`
  position: relative;
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

export const MainContentsContainer = styled.div<{
  isHideBoard: boolean;
  guideBoardWidth: number;
}>`
  max-width: ${BREAK_POINT}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: ${(props) =>
    props.isHideBoard ? 0 : props.guideBoardWidth}px;
`;

/**
 * コンテンツの幅に依存するがスクロールには追従する要素を囲むコンテナ
 */
export const StickyContainer = styled.div`
  position: sticky;
  height: 0;
  top: 0;
  width: 100%;
  z-index: 20;
`;

export const StickyMenuBoardStyle = (
  isHideBoard: boolean,
  guideBoardWidth: number
) => css`
  position: absolute;
  width: fit-content;
  right: ${isHideBoard ? 0 : -guideBoardWidth}px;
`;

export const StickyTopGuideBoardStyle = (
  isHideBoard: boolean,
  guideBoardWidth: number
) => css`
  top: 168px;
  position: absolute;
  opacity: ${isHideBoard ? 0 : 1};
  pointer-events: ${isHideBoard ? "none" : "unset"};
  right: ${isHideBoard ? 0 : -guideBoardWidth}px;
`;

export const AboutSection = styled.section`
  margin-top: 280px;
  margin-bottom: 336px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const AboutTitle = styled.h2`
  margin: 0;
  font-size: 88px;
  font-family: ${FontFamily.Header};
  text-align: center;
`;

export const AboutDescription = styled.p`
  margin: 0;
  font-size: 32px;
  letter-spacing: 2px;
  line-height: 2;
  text-align: center;
  font-weight: ${FontWeight.Bold};
  white-space: pre-wrap;
`;

export const CharactersSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 336px;
`;

export const SectionTitle = styled.h3`
  font-size: 48px;
  letter-spacing: 4px;
  color: ${UiColor.black};
  font-family: ${FontFamily.Header};
  margin: 0;
  text-align: center;
`;

export const SnsLinksContainer = styled.div`
  display: flex;
  gap: 144px;
`;

export const CharacterCardsContainer = styled.div`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  padding: 0 48px;
`;

export const CharacterCardStyle = css`
  width: calc((100% - 48px) / 2);
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 96px;
  margin-bottom: 160px;
`;

export const HeadBoardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const BrailleBlock = styled.div<{ top?: number; bottom?: number }>`
  position: absolute;
  ${(props) => (props.top ? `top: ${props.top}px;` : undefined)}
  ${(props) => (props.bottom ? `bottom: ${props.bottom}px;` : undefined)}
  left: 0;
  right: 0;
  height: 116px;
  background:
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 116px,
      white 116px,
      white 120px
    ),
    linear-gradient(
      0deg,
      ${UiColor.yellow},
      ${UiColor.yellow} 36px,
      white 36px,
      white 40px,
      ${UiColor.yellow} 40px,
      ${UiColor.yellow} 76px,
      white 76px,
      white 80px,
      ${UiColor.yellow} 80px,
      ${UiColor.yellow} 116px
    );
`;
