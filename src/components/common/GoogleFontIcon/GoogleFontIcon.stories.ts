import type { Meta, StoryObj } from "@storybook/react-vite";
import { GoogleFontIcon } from "./GoogleFontIcon";

export default {
  component: GoogleFontIcon,
} as Meta<typeof GoogleFontIcon>;

export const Basic: StoryObj<typeof GoogleFontIcon> = {
  args: {
    iconName: "expand_circle_down",
    size: 32,
    color: "blue",
  },
};

export const Large: StoryObj<typeof GoogleFontIcon> = {
  args: {
    iconName: "fmd_good",
    size: 64,
    color: "black",
  },
};
