import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpProfileFrame } from "./SpProfileFrame";

export default {
  component: SpProfileFrame,
  argTypes: {
    profile: { control: { disable: true } },
  },
} as Meta<typeof SpProfileFrame>;

export const Basic: StoryObj<typeof SpProfileFrame> = {
  args: {
    mainColor: "#4A90E2",
    profile: {
      description: "キャラクターの詳細な説明文がここに入ります。性格や特徴などを記述します。",
      age: "25歳",
      height: "170cm",
      occupation: "探索者",
      hobby: "読書",
    },
  },
};

export const DetailedProfile: StoryObj<typeof SpProfileFrame> = {
  args: {
    mainColor: "#E94E77",
    profile: {
      description:
        "より詳細なキャラクター説明。複数の特徴や背景設定を含む長めの説明文です。キャラクターの生い立ちや性格、特技などを詳しく記述することができます。",
      age: "28歳",
      height: "165cm",
      weight: "55kg",
      occupation: "探索者",
      hobby: "音楽鑑賞",
      birthplace: "東京都",
      bloodType: "A型",
    },
  },
};
