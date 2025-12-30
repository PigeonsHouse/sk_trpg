import type { Meta, StoryObj } from "@storybook/react-vite";
import { HistoryFrame } from "./HistoryFrame";

export default {
  component: HistoryFrame,
  argTypes: {
    changeIndex: { action: "index changed" },
    histories: { control: { disable: true } },
  },
} as Meta<typeof HistoryFrame>;

export const Basic: StoryObj<typeof HistoryFrame> = {
  args: {
    selectedIndex: 0,
    color: "#4A90E2",
    selectedColor: "#FFD700",
    shortId: "SRB",
    number: 1,
    histories: [
      {
        title: "最初の駅",
        iconUrl: "https://placehold.jp/100x100.png",
        comment: "これは最初の停車駅のコメントです。",
        companions: [],
      },
      {
        title: "次の駅",
        iconUrl: "https://placehold.jp/100x100.png",
        comment: "2番目の停車駅のコメントです。",
        companions: [
          {
            name: "同行者名",
            enName: "Companion Name",
            iconUrl: "https://placehold.jp/100x100.png",
            color: "#E94E77",
            nickName: "呼び名",
          },
        ],
      },
      {
        title: "最後の駅",
        iconUrl: "https://placehold.jp/100x100.png",
        comment: "最後の停車駅です。",
        companions: [],
      },
    ],
  },
};

export const ManyHistories: StoryObj<typeof HistoryFrame> = {
  args: {
    selectedIndex: 2,
    color: "#E94E77",
    selectedColor: "#FFD700",
    shortId: "CHR",
    number: 5,
    histories: Array(10)
      .fill(0)
      .map((_, i) => ({
        title: `駅 ${i + 1}`,
        iconUrl: "https://placehold.jp/100x100.png",
        comment: `${i + 1}番目の停車駅のコメントです。`,
        companions: [],
      })),
  },
};
