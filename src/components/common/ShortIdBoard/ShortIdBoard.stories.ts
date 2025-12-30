import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShortIdBoard } from "./ShortIdBoard";

export default {
  component: ShortIdBoard,
} as Meta<typeof ShortIdBoard>;

export const Basic: StoryObj<typeof ShortIdBoard> = {
  args: {
    shortId: "SRB",
    number: 1,
    bgColor: "yellow",
  },
};

export const SpVersion: StoryObj<typeof ShortIdBoard> = {
  args: {
    shortId: "KAI",
    number: 5,
    bgColor: "yellow",
    isSp: true,
  },
};

export const DoubleDigit: StoryObj<typeof ShortIdBoard> = {
  args: {
    shortId: "CHR",
    number: 23,
    bgColor: "yellow",
  },
};
