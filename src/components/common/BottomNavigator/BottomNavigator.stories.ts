import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomNavigator } from "./BottomNavigator";

export default {
  component: BottomNavigator,
  argTypes: {
    handlePrevious: { action: "previous clicked" },
    handleNext: { action: "next clicked" },
    handleAboutCharacters: { action: "about characters clicked" },
  },
} as Meta<typeof BottomNavigator>;

export const Basic: StoryObj<typeof BottomNavigator> = {
  args: {
    color: "#4A90E2",
  },
};

export const SpVersion: StoryObj<typeof BottomNavigator> = {
  args: {
    isSp: true,
    color: "#E94E77",
  },
};

export const NoPrevious: StoryObj<typeof BottomNavigator> = {
  args: {
    color: "#4A90E2",
    handlePrevious: undefined,
  },
};
