import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkillsFrame } from "./SkillsFrame";

export default {
  component: SkillsFrame,
  argTypes: {
    skills: { control: { disable: true } },
    colorPalette: { control: { disable: true } },
  },
} as Meta<typeof SkillsFrame>;

export const Basic: StoryObj<typeof SkillsFrame> = {
  args: {
    colorPalette: ["#4A90E2", "#50C878", "#FFD700"],
    skills: {
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

export const ManySkills: StoryObj<typeof SkillsFrame> = {
  args: {
    colorPalette: ["#E94E77", "#4ECDC4", "#FFD700"],
    skills: {
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
      mask001: 80,
      mask002: 90,
    },
  },
};
