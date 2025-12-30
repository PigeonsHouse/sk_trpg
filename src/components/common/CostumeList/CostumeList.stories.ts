import type { Meta, StoryObj } from "@storybook/react-vite";
import { CostumeList, type CostumeListProps } from "./CostumeList";

export default {
  component: CostumeList,
  argTypes: {
    items: {
      control: { disable: true },
    },
  },
} as Meta<typeof CostumeList>;

export const Basic: StoryObj<CostumeListProps> = {
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

export const SpVersion: StoryObj<CostumeListProps> = {
  args: {
    isSp: true,
    mainColor: "#E94E77",
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
    ],
  },
};
