import type { Meta, StoryObj } from "@storybook/react-vite";
import { TrafficLight } from "./TrafficLight";

export default {
  component: TrafficLight,
  argTypes: {
    colorPalette: { control: { disable: true } },
  },
} as Meta<typeof TrafficLight>;

export const Basic: StoryObj<typeof TrafficLight> = {
  args: {
    colorPalette: ["red", "yellow", "green"],
  },
};

export const SpVersion: StoryObj<typeof TrafficLight> = {
  args: {
    colorPalette: ["red", "yellow", "green"],
    isSp: true,
  },
};
