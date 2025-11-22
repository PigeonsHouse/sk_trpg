import type { QA } from "../../types";
import { CommonFrame } from "../CommonFrame";
import {
  Answer,
  ContentContainer,
  FrameStyle,
  QAContainer,
  Question,
  Title,
} from "./styled";

type QAFrameProps = {
  qaList: QA[];
};

export const QAFrame: React.FC<QAFrameProps> = ({ qaList }) => {
  return (
    <CommonFrame className={FrameStyle}>
      <Title>Q&A</Title>
      <ContentContainer>
        {qaList.map((qa, i) => (
          <QAContainer key={i}>
            <Question>Q. {qa.question}</Question>
            <Answer>A. {qa.answer}</Answer>
          </QAContainer>
        ))}
      </ContentContainer>
    </CommonFrame>
  );
};
