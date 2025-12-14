import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontFamily, FontWeight } from "../../../definitions";

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
