import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontFamily } from "../../../definitions";

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
