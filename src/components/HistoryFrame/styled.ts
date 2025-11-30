import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { BREAK_POINT, UiColor } from "../../definitions";

export const Container = styled.div`
  display: flex;
  gap: 32px;
`;

export const FrameStyle = css`
  position: relative;
  width: 480px;
  height: 360px;
  box-sizing: border-box;
  padding: 32px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TitleContainer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 36px;
  font-weight: bold;
  margin-top: -4px;
`;

export const ScrollContainer = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export const HistoriesContainer = styled.ol`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const HistoryLightBar = styled.div<{ count: number }>`
  position: absolute;
  width: 5px;
  height: ${(props) => 60 * (props.count - 1) + 4}px;
  background-color: ${UiColor.gray};
  left: 11.5px;
  top: 21.5px;
`;

export const HistoryOneLineContainer = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HistoryLight = styled.div<{
  isSelected: boolean;
  selectedColor: string;
}>`
  width: ${(props) => (props.isSelected ? 28 : 18)}px;
  height: ${(props) => (props.isSelected ? 28 : 18)}px;
  background-color: ${(props) =>
    props.isSelected ? props.selectedColor : "white"};
  margin: ${(props) => (props.isSelected ? 0 : 5)}px;
  border: 5px solid ${UiColor.gray};
  border-radius: 4px;
  box-sizing: border-box;
  z-index: 1;
  flex-shrink: 0;
`;

export const IndexCircle = styled.div<{ color: string }>`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 10px solid ${(props) => props.color};
  border-radius: 50%;
  font-weight: bold;
  font-size: 22px;
  flex-shrink: 0;
`;

export const HistoryTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-top: -8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const HistoryDetailAreaContainer = styled.div`
  flex-grow: 1;
`;

export const HistoryDetailContainer = styled.div<{ color: string }>`
  width: 100%;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  padding: 36px;
  padding-left: 72px;
  box-sizing: border-box;
  position: relative;
`;

export const SpeechBubbleTriangle = styled.div<{ color: string }>`
  position: absolute;
  border-style: solid;
  border-width: 28px 48px;
  border-left-width: 0;
  border-color: transparent;
  border-right-color: ${(props) => props.color};
  left: -48px;
  top: 60px;
`;

export const HistoryCommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`;

export const HistoryIconImage = styled.img`
  height: 100px;
  width: 100px;
  background-color: white;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const HistoryComment = styled.div`
  color: white;
  white-space: pre-wrap;
  font-size: 12px;
  line-height: 20px;
`;

export const CompanionContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 16px 24px;
  padding-bottom: 32px;
`;

export const CompanionTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export const CompanionInfoContainer = styled.ul`
  display: flex;
  gap: 26px;
  justify-content: center;
  list-style: none;
`;

export const SingleCompanionInfoContainer = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const CompanionIconImage = styled.img<{ color: string }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const CompanionNameStyle = css`
  & > span:first-child {
    font-size: 28px;
    font-weight: bold;
    line-height: normal;
    letter-spacing: 0;
  }
  & > span:last-child {
    font-size: 8px;
    letter-spacing: 0;
  }
`;

export const TopBar = styled.div`
  position: absolute;
  height: 36px;
  width: calc(50vw - ${BREAK_POINT / 2}px + 32px + 1px);
  background-color: ${UiColor.gray};
  left: calc(-50vw + ${BREAK_POINT / 2}px - 10px - 32px);
  top: 24px;
`;

export const BottomBar = styled.div`
  position: absolute;
  height: 36px;
  width: calc(50vw - ${BREAK_POINT / 2}px + 32px + 1px);
  background-color: ${UiColor.gray};
  left: calc(-50vw + ${BREAK_POINT / 2}px - 10px - 32px);
  bottom: 24px;
`;

export const ShortIdBoard = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  font-family: "BIZ UDGothic";
  width: 260px;
  height: 160px;
  position: absolute;
  font-weight: bold;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  left: -310px;
  bottom: -70px;
  user-select: none;
`;

export const ShortId = styled.span``;
export const ShortIdNumber = styled.span``;
