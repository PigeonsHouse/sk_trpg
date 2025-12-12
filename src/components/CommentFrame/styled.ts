import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontFamily } from "../../definitions";

export const FrameStyle = css`
  width: 880px;
  box-sizing: border-box;
  padding: 56px;
  margin: auto;
  margin-bottom: 120px;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin: 0;
  margin-bottom: 20px;
  font-family: ${FontFamily.Header};
`;

export const Comment = styled.div`
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 32px;
`;
