import type { Meta, StoryObj } from "@storybook/react-vite";
import { LabelBox } from "./LabelBox";

export default {
  component: LabelBox,
} as Meta<typeof LabelBox>;

export const Basic: StoryObj<typeof LabelBox> = {
  args: {
    backgroundColor: "green",
    label: "STR",
  },
};

export const DifferentColor: StoryObj<typeof LabelBox> = {
  args: {
    backgroundColor: "blue",
    label: "DEX",
  },
};

export const Mask: StoryObj<typeof LabelBox> = {
  args: {
    backgroundColor: "red",
    label: "MASK",
  },
};
