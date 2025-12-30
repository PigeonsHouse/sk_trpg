import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpCostumeArea } from "./SpCostumeArea";

export default {
  component: SpCostumeArea,
  argTypes: {
    items: { control: { disable: true } },
  },
} as Meta<typeof SpCostumeArea>;

export const Basic: StoryObj<typeof SpCostumeArea> = {
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

export const ManyItems: StoryObj<typeof SpCostumeArea> = {
  args: {
    mainColor: "#E94E77",
    selectedColor: "#FFD700",
    items: Array(6)
      .fill(0)
      .map((_, i) => ({
        isSelected: i === 0,
        imageUrl: "https://placehold.jp/200x200.png",
        onClick: () => {},
      })),
  },
};
