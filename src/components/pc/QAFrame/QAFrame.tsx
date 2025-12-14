import type { QA } from "../../../types";
import { CommonFrame } from "../../common";
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

export const questionList = [
  "休日何してる？",
  "待ち合わせ、早め？ちょうど？遅れがち？",
  "もしも願い事が一つ叶うとしたら？",
  "もしも明日地球が滅亡するなら何をする？",
];

type QAFrameProps = {
  qaList: QA[];
  color: string;
};

/**
 * PC版のインタビュー表示フレーム
 */
export const QAFrame: React.FC<QAFrameProps> = ({ qaList, color }) => {
  return (
    <CommonFrame className={FrameStyle}>
      <Title>突撃！探索者にインタビュー</Title>
      <ContentContainer>
        {qaList.map((qa, i) => (
          <QAContainer key={i}>
            <QuestionContainer>
              <QuestionIcon backgroundColor={color}>Q</QuestionIcon>
              <QuestionTitle>{questionList[i]}</QuestionTitle>
            </QuestionContainer>
            <AnswerContainer>
              <AnswerIcon backgroundColor={color} src={qa.iconUrl} />
              <Answer backgroundColor={color}>{qa.answer}</Answer>
            </AnswerContainer>
          </QAContainer>
        ))}
      </ContentContainer>
    </CommonFrame>
  );
};
