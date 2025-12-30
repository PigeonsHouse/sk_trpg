import type { Meta, StoryObj } from "@storybook/react-vite";
import { CommentFrame } from "./CommentFrame";

export default {
  component: CommentFrame,
} as Meta<typeof CommentFrame>;

export const LongComment: StoryObj<typeof CommentFrame> = {
  args: {
    comment:
      "これはサンプルのコメントです。キャラクターに対する作者のコメントがここに表示されます。キャラクターの設定や背景、作成時のエピソードなど、様々な情報を含めることができます。複数行にわたる長文のコメントでも適切に表示されるようになっています。",
  },
};
