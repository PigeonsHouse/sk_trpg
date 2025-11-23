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
      "https://pigeons.house/avatar.png",
      "https://pigeons.house/avatar.png",
      "https://pigeons.house/avatar.png",
    ],
  },
};
