import type { Meta, StoryObj } from "@storybook/react-vite";
import { SnsLink } from "./SnsLink";

export default {
  component: SnsLink,
} as Meta<typeof SnsLink>;

export const Twitter: StoryObj<typeof SnsLink> = {
  args: {
    variant: "x",
    circleRadius: 200,
  },
};

export const Skeb: StoryObj<typeof SnsLink> = {
  args: {
    variant: "skeb",
    circleRadius: 200,
  },
};

export const Small: StoryObj<typeof SnsLink> = {
  args: {
    variant: "x",
    circleRadius: 128,
  },
};
