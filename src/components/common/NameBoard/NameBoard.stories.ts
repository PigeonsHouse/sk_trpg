import type { Meta, StoryObj } from "@storybook/react-vite";
import { NameBoard } from "./NameBoard";

export default {
  component: NameBoard,
} as Meta<typeof NameBoard>;

export const Basic: StoryObj<typeof NameBoard> = {
  args: {
    name: "ほげげ",
    enName: "foo bar",
    color: "red",
  },
};

export const Large: StoryObj<typeof NameBoard> = {
  args: {
    name: "とっても長い名前",
    enName: "very long name",
    nameSize: "lg",
    color: "green",
  },
};

export const SpVersion: StoryObj<typeof NameBoard> = {
  args: {
    name: "スマホ版",
    enName: "SP Version",
    color: "blue",
    isSp: true,
  },
};

export const Heading: StoryObj<typeof NameBoard> = {
  args: {
    name: "h1タグを含むよ",
    enName: "has h1 tag",
    color: "yellow",
    isHeading: true,
  },
};
