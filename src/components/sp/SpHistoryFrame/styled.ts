import { css } from "@emotion/css";
import styled from "@emotion/styled";
import {
  DropShadowFilter,
  FontFamily,
  FontWeight,
  SP_MAX_WIDTH,
  UiColor,
} from "../../../definitions";

export const FrameStyle = css`
  margin: 0 16px;
  padding: 22px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: ${FontFamily.Header};
  font-size: 24px;
`;

export const IndexCircle = styled.div<{ borderColor: string }>`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 10px solid ${(props) => props.borderColor};
  border-radius: 50%;
  font-family: ${FontFamily.Bold};
  font-size: 20px;
  flex-shrink: 0;
  user-select: none;
`;

export const CompanionNameStyle = css`
  && {
    align-items: flex-start;
    flex-grow: 1;
  }
  & > span:first-child {
    font-size: 20px;
    font-weight: ${FontWeight.Bold};
    line-height: normal;
    letter-spacing: 0;
  }
  & > span:last-child {
    font-size: 8px;
    letter-spacing: 0;
    margin-left: 2px;
  }
`;

export const HistoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const HistoryContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const HistoryLight = styled.div<{
  isSelect?: boolean;
  selectedColor: string;
}>`
  width: ${(props) => (props.isSelect ? 24 : 18)}px;
  margin: ${(props) => (props.isSelect ? 0 : 3)}px;
  background-color: ${(props) =>
    props.isSelect ? props.selectedColor : "white"};
  aspect-ratio: 1 / 1;
  box-sizing: border-box;
  border: 6px solid ${UiColor.gray};
  border-radius: 4px;
  flex-shrink: 0;
  z-index: 1;
`;

export const HistoryTitle = styled.h3`
  font-family: ${FontFamily.Header};
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const HistoryLightBar = styled.div<{ historiesLength: number }>`
  width: 6px;
  background-color: ${UiColor.gray};
  position: absolute;
  top: ${24 - 3}px;
  left: ${12 - 3}px;
  height: ${(props) => 6 + (props.historiesLength - 1) * (48 + 8)}px;
`;

export const Backdrop = styled.div<{ isOpen?: boolean }>`
  inset: 0;
  position: fixed;
  background-color: rgb(from black r g b / 0.4);
  z-index: 60;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "unset" : "none")};
  transition: opacity, 0.2s;
`;

export const HistoryCard = styled.div<{ mainColor: string }>`
  inset: 0;
  position: fixed;
  width: calc(100% - 32px);
  max-width: ${SP_MAX_WIDTH - 32}px;
  height: fit-content;
  background-color: ${(props) => props.mainColor};
  border-radius: 16px;
  margin: auto;
  filter: ${DropShadowFilter};
  padding: 32px;
  box-sizing: border-box;
`;

export const CardTitle = styled.h3`
  color: white;
  font-family: ${FontFamily.Header};
  font-size: 24px;
  margin: 0;
  font-weight: initial;
`;

export const CardAvatar = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: white;
  margin-bottom: 8px;
`;

export const CardComment = styled.span`
  font-size: 12px;
  color: white;
`;

export const CardCompanionContainer = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`;

export const CardCompanionTitle = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 16px;
  font-family: ${FontFamily.Header};
  margin-bottom: 16px;
`;

export const CardCompanionCoverContainer = styled.div`
  position: relative;
`;

export const CardCompanionScrollContainer = styled.div`
  overflow-x: auto;
  height: fit-content;
`;

export const CompanionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width: 100%;
  gap: 8px;
`;

export const CompanionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

export const CompanionLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CompanionIcon = styled.img<{ companionColor: string }>`
  width: 40px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: ${(props) => props.companionColor};
`;

export const CompanionRightContainer = styled.div<{ mainColor: string }>`
  display: flex;
  align-items: center;
  color: ${(props) => props.mainColor};
`;

export const IconSwapStyle = css`
  transform: scaleX(-1);
`;

export const CompanionNickName = styled.span`
  word-break: keep-all;
`;

export const WhiteGradation = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 24px;
  background: linear-gradient(90deg, transparent, white);
`;

export const CardCloseButton = styled.button`
  position: absolute;
  padding: 0;
  border: none;
  background-color: white;
  aspect-ratio: 1 / 1;
  width: 48px;
  border-radius: 50%;
  filter: ${DropShadowFilter};
  top: -16px;
  right: -16px;
  cursor: pointer;
  span {
    font-weight: ${FontWeight.Bold};
  }
`;
