import type { Meta, StoryObj } from "@storybook/react-vite";
import { StationSprites } from "./StationSprites";

export default {
  component: StationSprites,
} as Meta<typeof StationSprites>;

export const Basic: StoryObj<typeof StationSprites> = {
  args: {
    gapCenters: [500, 1200, 1900, 2600, 3300],
  },
};
