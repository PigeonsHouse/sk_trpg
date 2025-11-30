import type { QA } from "../../types";
import { CommonFrame } from "../CommonFrame";
import {
  Answer,
  AnswerContainer,
  AnswerIcon,
  ContentContainer,
  FrameStyle,
  QAContainer,
  QuestionContainer,
  QuestionIcon,
  QuestionTitle,
  Title,
} from "./styled";

type QAFrameProps = {
  qaList: QA[];
  color: string;
};

const questionList = [
  "休日何してる？",
  "海派？山派？",
  "もしも願い事が一つ叶うとしたら？",
  "もしも明日地球が滅亡するなら何をする？",
];

export const QAFrame: React.FC<QAFrameProps> = ({ qaList, color }) => {
  return (
    <CommonFrame className={FrameStyle}>
      <Title>突撃！探索者にインタビュー</Title>
      <ContentContainer>
        {qaList.map((qa, i) => (
          <QAContainer key={i}>
            <QuestionContainer>
              <QuestionIcon color={color}>Q</QuestionIcon>
              <QuestionTitle>{questionList[i]}</QuestionTitle>
            </QuestionContainer>
            <AnswerContainer>
              <AnswerIcon color={color} src={qa.iconUrl} />
              <Answer color={color}>{qa.answer}</Answer>
            </AnswerContainer>
          </QAContainer>
        ))}
      </ContentContainer>
    </CommonFrame>
  );
};
