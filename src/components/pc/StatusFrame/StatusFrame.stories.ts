import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusFrame } from "./StatusFrame";

export default {
  component: StatusFrame,
  argTypes: {
    status: { control: { disable: true } },
    colorPalette: { control: { disable: true } },
  },
} as Meta<typeof StatusFrame>;

export const Basic: StoryObj<typeof StatusFrame> = {
  args: {
    colorPalette: ["#4A90E2", "#50C878", "#FFD700"],
    status: {
      type: "CoC6版",
      str: 60,
      con: 65,
      pow: 70,
      dex: 55,
      app: 50,
      int: 75,
      edu: 70,
      san: 45,
      hp: 30,
      mp: 20,
      db: "なし",
      luck: 60,
      idea: 50,
      knowledge: 70,
    },
  },
};

export const DifferentColor: StoryObj<typeof StatusFrame> = {
  args: {
    colorPalette: ["#E94E77", "#4ECDC4", "#FFD700"],
    status: {
      type: "CoC6版",
      str: 50,
      con: 60,
      pow: 80,
      dex: 70,
      app: 65,
      int: 85,
      edu: 75,
      hp: 12,
      mp: 16,
      san: 70,
      db: "+1d4",
      luck: 60,
      idea: 50,
      knowledge: 70,
    },
  },
};
