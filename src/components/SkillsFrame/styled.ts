import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { BREAK_POINT, FontWeight, UiColor } from "../../definitions";

export const FrameStatus = css`
  padding: 24px;
  min-height: 360px;
  position: relative;
  box-sizing: border-box;
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

export const SkillsColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SkillsOneLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  width: 180px;
  font-weight: ${FontWeight.Medium};
`;

export const Value = styled.div``;

export const TopBar = styled.div`
  position: absolute;
  height: 36px;
  width: calc(50vw - ${BREAK_POINT / 2}px + 32px);
  background-color: ${UiColor.gray};
  right: calc(-50vw + ${BREAK_POINT / 2}px - 32px);
  top: calc(24px);
`;

export const BottomBar = styled.div`
  position: absolute;
  height: 36px;
  width: calc(50vw - ${BREAK_POINT / 2}px + 32px);
  background-color: ${UiColor.gray};
  right: calc(-50vw + ${BREAK_POINT / 2}px - 32px);
  bottom: calc(48px);
`;

export const LightStyle = css`
  position: absolute;
  right: -314px;
  bottom: -34px;
`;
