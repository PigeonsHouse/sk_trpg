import { CommonFrame } from "../../common";
import { Comment, FrameStyle, Title } from "./styled";

type CommentFrameProps = {
  comment: string;
};

/**
 * PC版の作者コメントフレーム
 */
export const CommentFrame: React.FC<CommentFrameProps> = ({ comment }) => (
  <CommonFrame className={FrameStyle}>
    <Title>鈴木乖離のコメント</Title>
    <Comment>{comment}</Comment>
  </CommonFrame>
);
