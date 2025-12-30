import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArtGallery, type ArtGalleryProps } from "./ArtGallery";

export default {
  component: ArtGallery,
  argTypes: {
    artGallery: { control: { disable: true } },
  },
} as Meta<typeof ArtGallery>;

export const Basic: StoryObj<ArtGalleryProps> = {
  args: {
    artGallery: [
      "https://placehold.jp/400x300.png",
      "https://placehold.jp/1600x900.png",
      "https://placehold.jp/800x800.png",
    ],
  },
};
