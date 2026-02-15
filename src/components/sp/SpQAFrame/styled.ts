import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontFamily, FontWeight } from "../../../definitions";

export const FrameStyle = css`
  margin: 0 16px;
  padding: 22px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;
  font-family: ${FontFamily.Header};
  font-size: 24px;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: ${FontWeight.Bold};
`;

export const QuestionIcon = styled.div<{ bgColor: string }>`
  width: 32px;
  aspect-ratio: 1 / 1;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: ${FontFamily.Question};
  flex-shrink: 0;
`;

export const QuestionTitle = styled.span``;

export const AnswerIcon = styled.img<{ bgColor: string }>`
  aspect-ratio: 1 / 1;
  width: 100px;
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
`;

export const SpeechBubble = styled.div<{ bgColor: string }>`
  position: relative;
  font-size: 12px;
  padding: 16px 24px;
  background-color: ${(props) => props.bgColor};
  border-radius: 16px;
  color: white;
  margin-top: 24px;
  white-space: pre-wrap;

  &::before {
    content: "";
    position: absolute;
    top: -24px;
    left: calc(50% - 16px);
    border-style: solid;
    border-color: transparent;
    border-width: 24px 16px;
    border-top-width: 0;
    border-bottom-color: ${(props) => props.bgColor};
  }
`;
