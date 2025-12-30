import type { Meta, StoryObj } from "@storybook/react-vite";
import { QAFrame } from "./QAFrame";

export default {
  component: QAFrame,
  argTypes: {
    qaList: { control: { disable: true } },
  },
} as Meta<typeof QAFrame>;

export const Basic: StoryObj<typeof QAFrame> = {
  args: {
    color: "#4A90E2",
    qaList: [
      {
        iconUrl: "https://placehold.jp/100x100.png",
        answer: "家でゆっくり過ごすことが多いです。",
      },
      {
        iconUrl: "https://placehold.jp/100x100.png",
        answer: "ちょうどの時間に到着するようにしています。",
      },
      {
        iconUrl: "https://placehold.jp/100x100.png",
        answer: "世界平和を願います。",
      },
      {
        iconUrl: "https://placehold.jp/100x100.png",
        answer: "大切な人と一緒に過ごしたいです。",
      },
    ],
  },
};

export const DifferentColor: StoryObj<typeof QAFrame> = {
  args: {
    color: "#E94E77",
    qaList: [
      {
        iconUrl: "https://placehold.jp/100x100.png",
        answer: "アウトドアでアクティブに過ごします。",
      },
      {
        iconUrl: "https://placehold.jp/100x100.png",
        answer: "早めに着くようにしています。",
      },
      {
        iconUrl: "https://placehold.jp/100x100.png",
        answer: "タイムマシンが欲しいです。",
      },
      {
        iconUrl: "https://placehold.jp/100x100.png",
        answer: "思いっきり楽しみたいですね。",
      },
    ],
  },
};
