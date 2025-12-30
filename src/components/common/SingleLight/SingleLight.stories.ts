import type { Meta, StoryObj } from "@storybook/react-vite";
import { SingleLight } from "./SingleLight";

export default {
  component: SingleLight,
} as Meta<typeof SingleLight>;

export const Basic: StoryObj<typeof SingleLight> = {
  args: {
    lightColor: "yellow",
  },
};

export const SpVersion: StoryObj<typeof SingleLight> = {
  args: {
    lightColor: "yellow",
    isSp: true,
  },
};

export const DifferentColor: StoryObj<typeof SingleLight> = {
  args: {
    lightColor: "red",
  },
};
