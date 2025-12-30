import type { Meta, StoryObj } from "@storybook/react-vite";
import { CharacterHeader } from "./CharacterHeader";

export default {
  component: CharacterHeader,
  argTypes: {
    handlePrevious: { action: "previous clicked" },
    handleNext: { action: "next clicked" },
  },
} as Meta<typeof CharacterHeader>;

export const Basic: StoryObj<typeof CharacterHeader> = {
  args: {
    name: "キャラクター名",
    enName: "Character Name",
    color: "#4A90E2",
  },
};

export const Shrink: StoryObj<typeof CharacterHeader> = {
  args: {
    name: "キャラクター名",
    enName: "Character Name",
    color: "#E94E77",
    isShrink: true,
  },
};

export const WithMenu: StoryObj<typeof CharacterHeader> = {
  args: {
    name: "キャラクター名",
    enName: "Character Name",
    color: "#4A90E2",
    isShrink: true,
    isShowMenu: true,
  },
};

export const NoPrevious: StoryObj<typeof CharacterHeader> = {
  args: {
    name: "キャラクター名",
    enName: "Character Name",
    color: "#4A90E2",
    handlePrevious: undefined,
  },
};
