import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const FrameStyle = css`
  width: 880px;
  margin: auto;
  padding: 40px 100px;
  flex-grow: 1;
  z-index: 2;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
  font-size: 64px;
  margin-bottom: 48px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const QAContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const Question = styled.div`
  margin-bottom: 8px;
`;

export const Answer = styled.div``;
