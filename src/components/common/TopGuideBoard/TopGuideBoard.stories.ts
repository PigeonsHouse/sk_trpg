import type { Meta, StoryObj } from "@storybook/react-vite";
import { TopGuideBoard } from "./TopGuideBoard";

export default {
  component: TopGuideBoard,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof TopGuideBoard>;

export const Basic: StoryObj<typeof TopGuideBoard> = {
  args: {},
};

export const SpVersion: StoryObj<typeof TopGuideBoard> = {
  args: {
    isSp: true,
  },
};
