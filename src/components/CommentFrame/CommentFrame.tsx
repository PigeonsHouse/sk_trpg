import { CommonFrame } from "../CommonFrame";
import { Comment, FrameStyle, Title } from "./styled";

type CommentFrameProps = {
  comment: string;
};

export const CommentFrame: React.FC<CommentFrameProps> = ({ comment }) => {
  return (
    <CommonFrame className={FrameStyle}>
      <Title>鈴木乖離のコメント</Title>
      <Comment>{comment}</Comment>
    </CommonFrame>
  );
};
