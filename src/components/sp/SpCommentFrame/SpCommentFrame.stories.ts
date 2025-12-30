import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpCommentFrame } from "./SpCommentFrame";

export default {
  component: SpCommentFrame,
} as Meta<typeof SpCommentFrame>;

export const Basic: StoryObj<typeof SpCommentFrame> = {
  args: {
    comment:
      "これはサンプルのコメントです。キャラクターに対する作者のコメントがここに表示されます。キャラクターの設定や背景、作成時のエピソードなど、様々な情報を含めることができます。複数行にわたる長文のコメントでも適切に表示されるようになっています。",
  },
};
