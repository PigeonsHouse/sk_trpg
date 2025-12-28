import { CommonFrame } from "../../common";
import { Comment, FrameStyle, Title } from "./styled";

type SpCommentFrameProps = {
  comment: string;
};

export const SpCommentFrame: React.FC<SpCommentFrameProps> = ({ comment }) => {
  return (
    <CommonFrame className={FrameStyle}>
      <Title>鈴木乖離のコメント</Title>
      <Comment>{comment}</Comment>
    </CommonFrame>
  );
};
