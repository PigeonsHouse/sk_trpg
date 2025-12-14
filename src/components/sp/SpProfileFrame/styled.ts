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

export const FrameTitle = styled.h2<{ withBorder?: boolean }>`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: ${FontFamily.Header};
  font-size: 24px;
  ${(props) =>
    props.withBorder ? `border-bottom: 1px solid ${UiColor.black};` : undefined}
`;

export const DescriptionContainer = styled.div``;

export const Description = styled.span`
  font-size: 12px;
  line-height: 14px;
  white-space: pre-wrap;
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
`;

export const LabelStyle = css`
  margin-right: 32px;
  height: 32px;
`;

export const LabelValue = styled.span``;
