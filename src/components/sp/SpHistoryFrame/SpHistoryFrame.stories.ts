import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpHistoryFrame } from "./SpHistoryFrame";

export default {
  component: SpHistoryFrame,
  argTypes: {
    setSelectedHistoryIndex: { action: "history selected" },
    histories: { control: { disable: true } },
  },
} as Meta<typeof SpHistoryFrame>;

export const Basic: StoryObj<typeof SpHistoryFrame> = {
  args: {
    selectedHistoryIndex: 0,
    mainColor: "#4A90E2",
    selectedColor: "#FFD700",
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

export const ManyHistories: StoryObj<typeof SpHistoryFrame> = {
  args: {
    selectedHistoryIndex: 2,
    mainColor: "#E94E77",
    selectedColor: "#FFD700",
    histories: Array(8)
      .fill(0)
      .map((_, i) => ({
        title: `駅 ${i + 1}`,
        iconUrl: "https://placehold.jp/100x100.png",
        comment: `${i + 1}番目の停車駅のコメントです。`,
        companions: [],
      })),
  },
};
