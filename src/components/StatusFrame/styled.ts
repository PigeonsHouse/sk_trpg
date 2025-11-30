import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { BREAK_POINT, UiColor } from "../../definitions";

export const FrameStatus = css`
  padding: 24px;
  position: relative;
`;

export const TopBar = styled.div`
  position: absolute;
  height: 36px;
  width: calc(50vw - ${BREAK_POINT / 2}px + 32px + 1px);
  background-color: ${UiColor.gray};
  left: calc(-50vw + ${BREAK_POINT / 2}px - 10px - 32px);
  top: calc(24px);
`;

export const BottomBar = styled.div`
  position: absolute;
  height: 36px;
  width: calc(50vw - ${BREAK_POINT / 2}px + 32px + 1px);
  background-color: ${UiColor.gray};
  left: calc(-50vw + ${BREAK_POINT / 2}px - 10px - 32px);
  bottom: calc(48px);
`;

export const Title = styled.h2`
  margin: 0;
  margin-top: -8px;
  font-size: 32px;
  border-bottom: 1px solid ${UiColor.gray};
  margin-bottom: 8px;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StatusColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StatusOneLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  width: 180px;
  font-weight: 500;
`;

export const Value = styled.div``;

export const TrafficLightContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 400px;
  background-color: ${UiColor.darkGray};
  border-radius: 9999px;
  top: -132px;
  left: -280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const TrafficLight = styled.div<{ color: string }>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
