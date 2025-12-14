import { cx } from "@emotion/css";
import type { QA } from "../../../types";
import { CommonFrame } from "../../common";
import { questionList } from "../../pc";
import {
  AnswerIcon,
  FrameStyle,
  ItemContainer,
  QuestionIcon,
  TitleContainer,
  Title,
  SpeechBubble,
  QuestionTitle,
} from "./styled";

type SpQAFrameProps = {
  className?: string;
  qaList: QA[];
  mainColor: string;
};

export const SpQAFrame: React.FC<SpQAFrameProps> = ({
  className,
  qaList,
  mainColor,
}) => {
  return (
    <CommonFrame className={cx(FrameStyle, className)}>
      <Title>{`突撃！\n探索者にインタビュー`}</Title>
      {qaList.map((qa, i) => (
        <ItemContainer>
          <TitleContainer>
            <QuestionIcon bgColor={mainColor}>Q</QuestionIcon>
            <QuestionTitle>{questionList[i]}</QuestionTitle>
          </TitleContainer>
          <AnswerIcon bgColor={mainColor} src={qa.iconUrl} />
          <SpeechBubble bgColor={mainColor}>{qa.answer}</SpeechBubble>
        </ItemContainer>
      ))}
    </CommonFrame>
  );
};
