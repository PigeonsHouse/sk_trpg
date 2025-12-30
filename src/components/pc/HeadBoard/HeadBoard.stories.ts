import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeadBoard } from "./HeadBoard";

export default {
  component: HeadBoard,
} as Meta<typeof HeadBoard>;

export const Basic: StoryObj<typeof HeadBoard> = {
  args: {
    label: "キャラクター一覧",
    enLabel: "CHARACTER LIST",
  },
};

export const About: StoryObj<typeof HeadBoard> = {
  args: {
    label: "このサイトについて",
    enLabel: "ABOUT THIS SITE",
  },
};

export const Short: StoryObj<typeof HeadBoard> = {
  args: {
    label: "情報",
    enLabel: "INFO",
  },
};
