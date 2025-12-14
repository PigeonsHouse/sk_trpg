import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontFamily, UiColor } from "../../../definitions";

export const FrameStyle = css`
  margin: 0 16px;
  padding: 22px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FrameTitle = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: ${FontFamily.Header};
  font-size: 24px;
  border-bottom: 1px solid ${UiColor.black};
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const LabelAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LabelStyle = css`
  margin-right: 32px;
  height: 32px;
  && {
    width: 80px;
    margin-right: 16px;
  }
`;

export const LabelValue = styled.span``;
