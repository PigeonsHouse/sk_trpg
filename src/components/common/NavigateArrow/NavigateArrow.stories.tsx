import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigateArrow } from "./NavigateArrow";

export default {
  component: NavigateArrow,
} as Meta<typeof NavigateArrow>;

export const LeftArrow: StoryObj<typeof NavigateArrow> = {
  args: {
    arrowDirection: "left",
    arrowHeight: 32,
    mainColor: "red",
  },
};

export const RightArrow: StoryObj<typeof NavigateArrow> = {
  args: {
    arrowDirection: "right",
    arrowHeight: 32,
    mainColor: "red",
  },
};

export const Disabled: StoryObj<typeof NavigateArrow> = {
  args: {
    arrowDirection: "left",
    arrowHeight: 32,
    mainColor: "red",
    disabled: true,
  },
};

export const Large: StoryObj<typeof NavigateArrow> = {
  args: {
    arrowDirection: "right",
    arrowHeight: 64,
    mainColor: "red",
  },
};
