import { css } from "@emotion/css";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuBoard } from "./MenuBoard";

const className = css`
  width: fit-content;
`;

export default {
  component: MenuBoard,
  argTypes: {
    className: { control: { disable: true } },
    setIsBackdropOpen: { action: "backdrop toggled" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof MenuBoard>;

export const Basic: StoryObj<typeof MenuBoard> = {
  args: {
    className,
  },
};

export const SpVersion: StoryObj<typeof MenuBoard> = {
  args: {
    className,
    isSp: true,
  },
};

export const Disabled: StoryObj<typeof MenuBoard> = {
  args: {
    className,
    disabled: true,
  },
};
