import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { BREAK_POINT, UiColor } from "../../definitions";

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

export const IndexCircle = styled.div<{ color: string }>`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 10px solid ${(props) => props.color};
  border-radius: 9999px;
  font-weight: bold;
  font-size: 22px;
  padding-bottom: 4px;
`;
