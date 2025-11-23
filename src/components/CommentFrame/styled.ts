import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { size } from "../../definitions";

export const FrameStyle = css`
  width: ${size.x110}px;
  box-sizing: border-box;
  padding: ${size.x7}px;
  margin: auto;
  margin-bottom: ${size.x15}px;
`;

export const Title = styled.h2`
  font-size: ${size.x4}px;
  margin: 0;
  margin-bottom: ${size.x2half}px;
`;

export const Comment = styled.div`
  white-space: pre-wrap;
  font-size: ${size.x2}px;
  line-height: ${size.x4}px;
`;
