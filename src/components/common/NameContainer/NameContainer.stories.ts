import type { Meta, StoryObj } from "@storybook/react-vite";
import { NameContainer, type NameContainerProps } from "./NameContainer";

export default {
  component: NameContainer,
} as Meta<typeof NameContainer>;

export const Basic: StoryObj<NameContainerProps> = {
  args: {
    name: "ほげげ",
    enName: "foo bar",
  },
};

export const Large: StoryObj<NameContainerProps> = {
  args: {
    name: "とっても長い名前",
    enName: "very long name",
    size: "lg",
  },
};

export const SpVersion: StoryObj<NameContainerProps> = {
  args: {
    name: "スマホ版",
    enName: "SP Version",
    isSp: true,
  },
};
