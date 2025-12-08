import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { FontFamily, FontWeight } from "../../definitions";

export const FrameStyle = css`
  width: 960px;
  margin: auto;
  padding: 64px 120px;
  flex-grow: 1;
  z-index: 2;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
  font-size: 48px;
  margin-bottom: 48px;
  line-height: 1;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const QAContainer = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const QuestionContainer = styled.div``;

export const QuestionIcon = styled.span<{ backgroundColor: string }>`
  display: inline-flex;
  background-color: ${(props) => props.backgroundColor};
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  box-sizing: border-box;
  margin-right: 16px;
  font-weight: ${FontWeight.Bold};
  font-family: ${FontFamily.Question};
  user-select: none;
`;

export const QuestionTitle = styled.h3`
  display: inline;
  margin: 0;
  font-weight: ${FontWeight.Bold};
`;

export const AnswerContainer = styled.div`
  display: flex;
`;

export const AnswerIcon = styled.img<{ backgroundColor: string }>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  vertical-align: middle;
`;

export const Answer = styled.div<{ backgroundColor: string }>`
  margin-left: 48px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  height: 100px;
  border-radius: 8px;
  font-size: 12px;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  white-space: pre-wrap;

  &::after {
    position: absolute;
    border-color: transparent;
    border-style: solid;
    border-width: 16px 32px;
    border-right-color: ${(props) => props.backgroundColor};
    border-left: 0;
    top: calc(50% - 16px);
    left: -32px;
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
  }
`;
