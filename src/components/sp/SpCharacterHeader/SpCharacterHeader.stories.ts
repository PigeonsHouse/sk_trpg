import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpCharacterHeader } from "./SpCharacterHeader";

export default {
  component: SpCharacterHeader,
  argTypes: {
    handlePrevious: { action: "previous clicked" },
    handleNext: { action: "next clicked" },
    onSwitchMenuOpen: { action: "menu toggled" },
  },
} as Meta<typeof SpCharacterHeader>;

export const Basic: StoryObj<typeof SpCharacterHeader> = {
  args: {
    name: "キャラクター名",
    enName: "Character Name",
    mainColor: "#4A90E2",
    isBackdropOpen: false,
  },
};

export const BackdropOpen: StoryObj<typeof SpCharacterHeader> = {
  args: {
    name: "キャラクター名",
    enName: "Character Name",
    mainColor: "#E94E77",
    isBackdropOpen: true,
  },
};

export const NoPrevious: StoryObj<typeof SpCharacterHeader> = {
  args: {
    name: "キャラクター名",
    enName: "Character Name",
    mainColor: "#4A90E2",
    handlePrevious: undefined,
    isBackdropOpen: false,
  },
};
