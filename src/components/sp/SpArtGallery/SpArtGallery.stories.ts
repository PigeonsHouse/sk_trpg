import type { Meta, StoryObj } from "@storybook/react-vite";
import { SpArtGallery } from "./SpArtGallery";

export default {
  component: SpArtGallery,
  argTypes: {
    artGallery: { control: { disable: true } },
  },
} as Meta<typeof SpArtGallery>;

export const Basic: StoryObj<typeof SpArtGallery> = {
  args: {
    mainColor: "#4A90E2",
    artGallery: [
      "https://placehold.jp/400x300.png",
      "https://placehold.jp/1600x900.png",
      "https://placehold.jp/800x800.png",
    ],
  },
};

export const ManyImages: StoryObj<typeof SpArtGallery> = {
  args: {
    mainColor: "#E94E77",
    artGallery: [
      "https://placehold.jp/400x300.png",
      "https://placehold.jp/1600x900.png",
      "https://placehold.jp/800x800.png",
      "https://placehold.jp/600x400.png",
      "https://placehold.jp/1200x800.png",
    ],
  },
};
