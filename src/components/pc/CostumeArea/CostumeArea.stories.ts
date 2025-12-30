import type { Meta, StoryObj } from "@storybook/react-vite";
import { CostumeArea } from "./CostumeArea";

export default {
  component: CostumeArea,
  argTypes: {
    items: { control: { disable: true } },
  },
} as Meta<typeof CostumeArea>;

export const Basic: StoryObj<typeof CostumeArea> = {
  args: {
    mainColor: "#4A90E2",
    selectedColor: "#FFD700",
    items: [
      {
        isSelected: true,
        imageUrl: "https://placehold.jp/200x200.png",
        onClick: () => {},
      },
      {
        isSelected: false,
        imageUrl: "https://placehold.jp/200x200.png",
        onClick: () => {},
      },
      {
        isSelected: false,
        imageUrl: "https://placehold.jp/200x200.png",
        onClick: () => {},
      },
    ],
  },
};

export const ManyItems: StoryObj<typeof CostumeArea> = {
  args: {
    mainColor: "#E94E77",
    selectedColor: "#FFD700",
    items: Array(8)
      .fill(0)
      .map((_, i) => ({
        isSelected: i === 0,
        imageUrl: "https://placehold.jp/200x200.png",
        onClick: () => {},
      })),
  },
};
