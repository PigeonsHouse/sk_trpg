import { css } from "@emotion/css";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrailleBlock } from "./BrailleBlock";

const className = css`
  inset: 0;
`;

export default {
  component: BrailleBlock,
} as Meta<typeof BrailleBlock>;

export const Horizontal: StoryObj<typeof BrailleBlock> = {
  args: {
    gap: 2,
    blockColor: "yellow",
    blockLength: 120,
    orientation: "horizontal",
    className,
  },
};

export const Vertical: StoryObj<typeof BrailleBlock> = {
  args: {
    gap: 2,
    blockColor: "yellow",
    blockLength: 120,
    orientation: "vertical",
    className,
  },
};

export const Small: StoryObj<typeof BrailleBlock> = {
  args: {
    gap: 3,
    blockColor: "yellow",
    blockLength: 64,
    orientation: "horizontal",
    className,
  },
};
