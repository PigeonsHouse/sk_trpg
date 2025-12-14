import { css } from "@emotion/css";
import styled from "@emotion/styled";
import {
  BREAK_POINT,
  FontFamily,
  FontWeight,
  UiColor,
} from "../../../definitions";

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
  font-size: 32px;
  border-bottom: 1px solid ${UiColor.gray};
  margin-bottom: 8px;
  font-family: ${FontFamily.Header};
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
  font-weight: ${FontWeight.Medium};
`;

export const Value = styled.div``;

export const TrafficLightStyle = css`
  position: absolute;
  top: -132px;
  left: -280px;
`;
