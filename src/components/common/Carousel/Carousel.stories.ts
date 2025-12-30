import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel, type CarouselProps } from "./Carousel";

export default {
  component: Carousel,
  argTypes: {
    carouselItems: {
      control: { disable: true },
    },
  },
} as Meta<typeof Carousel>;

export const Basic: StoryObj<CarouselProps> = {
  args: {
    mainColor: "blue",
    carouselItems: [
      {
        imageUrl: "https://placehold.jp/400x300.png",
        onClick: () => {},
      },
      {
        imageUrl: "https://placehold.jp/400x300.png",
        onClick: () => {},
      },
      {
        imageUrl: "https://placehold.jp/400x300.png",
        onClick: () => {},
      },
      {
        imageUrl: "https://placehold.jp/400x300.png",
        onClick: () => {},
      },
    ],
  },
};
