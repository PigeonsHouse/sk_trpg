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
      description:
        "キャラクターの詳細な説明文がここに入ります。性格や特徴などを記述します。",
      age: "25歳",
      height: "170cm",
      weight: "65kg",
      hobby: "読書",
      gender: "男性",
      job: "本屋",
      like: "古本",
    },
  },
};

export const DetailedProfile: StoryObj<typeof SpProfileFrame> = {
  args: {
    mainColor: "#E94E77",
    profile: {
      description:
        "違う色はこんな感じ。キャラクターの詳細な説明文がここに入ります。性格や特徴などを記述します。",
      age: "28歳",
      height: "165cm",
      weight: "55kg",
      hobby: "音楽鑑賞",
      gender: "女性",
      job: "作曲家",
      like: "ボカロ",
    },
  },
};
