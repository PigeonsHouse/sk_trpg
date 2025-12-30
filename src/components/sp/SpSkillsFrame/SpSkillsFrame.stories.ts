import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpSkillsFrame } from "./SpSkillsFrame";

export default {
  component: SpSkillsFrame,
  argTypes: {
    skills: { control: { disable: true } },
    switchExpand: { action: "expand toggled" },
  },
} as Meta<typeof SpSkillsFrame>;

export const Collapsed: StoryObj<typeof SpSkillsFrame> = {
  args: {
    mainColor: "#4A90E2",
    isExpand: false,
    skills: {
      type: "基本",
      聞き耳: 60,
      図書館: 70,
      目星: 75,
      心理学: 50,
      説得: 65,
      医学: 40,
      回避: 55,
      隠れる: 45,
    },
  },
};

export const Expanded: StoryObj<typeof SpSkillsFrame> = {
  args: {
    mainColor: "#E94E77",
    isExpand: true,
    skills: {
      type: "詳細",
      聞き耳: 60,
      図書館: 70,
      目星: 75,
      心理学: 50,
      説得: 65,
      医学: 40,
      回避: 55,
      隠れる: 45,
      忍び歩き: 35,
      運転: 50,
      "mask001": 80,
      "mask002": 90,
    },
  },
};
