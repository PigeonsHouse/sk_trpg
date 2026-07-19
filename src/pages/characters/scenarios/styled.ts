import { css } from "@emotion/css";
import styled from "@emotion/styled";
import {
  BREAK_POINT,
  DropShadowFilter,
  FontFamily,
  FontWeight,
  SP_MAX_WIDTH,
  UiColor,
} from "../../../definitions";
import { withAlpha } from "../../../utils";

export const Container = styled.div`
  position: relative;
  min-height: 100dvh;
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

export const MenuBoardStyle = css`
  position: fixed;
  top: 0;
  right: 32px;
  z-index: 50;
`;

export const HeadBoardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const MainContentsContainer = styled.div`
  max-width: ${BREAK_POINT}px;
  margin: 0 auto;
  padding: 280px 48px 200px;
  display: flex;
  flex-direction: column;
  gap: 96px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 40px;
  letter-spacing: 3px;
  font-family: ${FontFamily.Header};
  color: ${UiColor.black};
`;

export const SectionEnTitle = styled.span`
  font-size: 16px;
  font-family: ${FontFamily.Header};
  color: ${UiColor.gray};
  letter-spacing: 1px;
`;

export const ListCard = styled.div`
  background-color: ${UiColor.white};
  padding: 8px 24px;
`;

export const ScenarioList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ScenarioItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 8px;
  border-bottom: 2px dashed ${withAlpha(UiColor.gray, 0.4)};

  &:first-of-type {
    border-top: 2px dashed ${withAlpha(UiColor.gray, 0.4)};
  }
`;

export const ScenarioTitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  min-width: 0;
`;

export const ScenarioBullet = styled.span`
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  background-color: ${UiColor.yellow};
  border: 2px solid ${UiColor.darkGray};
`;

export const ScenarioTitle = styled.span`
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 20px;
  color: ${UiColor.black};
  overflow-wrap: anywhere;
`;

export const CharacterLinksContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const CharacterLinkStyle = css`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${UiColor.darkGray};
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const CharacterIconStyle = (color: string) => css`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${color};
  border: 2px solid ${UiColor.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CharacterIconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const EmptyDescription = styled.p`
  margin: 0;
  font-family: ${FontFamily.Regular};
  font-size: 16px;
  color: ${UiColor.gray};
`;

// SPスタイル

export const SpContainer = styled.div`
  position: relative;
  min-height: 100dvh;
  background:
    repeating-linear-gradient(
      transparent,
      transparent 120px,
      ${UiColor.gray} 121px,
      ${UiColor.gray} 121px
    ),
    repeating-linear-gradient(
      270deg,
      transparent,
      transparent 130px,
      ${UiColor.gray} 131px,
      ${UiColor.gray} 131px
    );
`;

export const SpMenuBoardStyle = css`
  position: fixed;
  right: calc(max(calc((100% - ${SP_MAX_WIDTH}px) / 2), 0px) + 16px);
  z-index: 50;
`;

export const SpMainContentsContainer = styled.div`
  padding: 120px 20px 120px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const SpTitleContainer = styled.div`
  flex-shrink: 0;
  filter: ${DropShadowFilter};
`;

export const SpTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  font-family: ${FontFamily.Header};
  letter-spacing: 2px;
  text-align: center;
`;

export const SpEnTitle = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  font-family: ${FontFamily.Header};
  text-align: center;
  color: ${UiColor.gray};
`;

export const SpSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SpSectionTitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export const SpSectionTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  letter-spacing: 1px;
  font-family: ${FontFamily.Header};
  color: ${UiColor.black};
`;

export const SpSectionEnTitle = styled.span`
  font-size: 12px;
  font-family: ${FontFamily.Header};
  color: ${UiColor.gray};
`;

export const SpListCard = styled.div`
  background-color: ${UiColor.white};
  padding: 4px 16px;
`;

export const SpScenarioList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const SpScenarioItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 4px;
  border-bottom: 2px dashed ${withAlpha(UiColor.gray, 0.4)};

  &:first-of-type {
    border-top: 2px dashed ${withAlpha(UiColor.gray, 0.4)};
  }
`;

export const SpScenarioTitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  min-width: 0;
`;

export const SpScenarioBullet = styled.span`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  background-color: ${UiColor.yellow};
  border: 2px solid ${UiColor.darkGray};
`;

export const SpScenarioTitle = styled.span`
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 15px;
  color: ${UiColor.black};
  overflow-wrap: anywhere;
`;

export const SpCharacterLinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-left: 16px;
`;

export const SpCharacterLinkStyle = css`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: ${UiColor.darkGray};
  font-family: ${FontFamily.Regular};
  font-weight: ${FontWeight.Bold};
  font-size: 11px;

  &:hover {
    text-decoration: underline;
  }
`;

export const SpCharacterIconStyle = (color: string) => css`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${color};
  border: 2px solid ${UiColor.darkGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpCharacterIconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SpEmptyDescription = styled.p`
  margin: 0;
  font-family: ${FontFamily.Regular};
  font-size: 13px;
  color: ${UiColor.gray};
`;
