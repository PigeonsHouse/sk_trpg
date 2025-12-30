import type { Meta, StoryObj } from "@storybook/react-vite";
import { Window } from "./Window";

export default {
  component: Window,
  argTypes: {
    colorPalette: { control: { disable: true } },
  },
} as Meta<typeof Window>;

export const Basic: StoryObj<typeof Window> = {
  args: {
    colorPalette: ["#4A90E2", "#50C878"],
  },
};

export const DifferentColors: StoryObj<typeof Window> = {
  args: {
    colorPalette: ["#E94E77", "#FFD700"],
  },
};
