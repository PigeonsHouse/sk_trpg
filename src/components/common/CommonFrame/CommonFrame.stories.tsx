import styled from "@emotion/styled";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { CommonFrame } from "./CommonFrame";

const Child = styled.div`
  padding: 16px;
`;

export default {
  component: CommonFrame,
} as Meta<typeof CommonFrame>;

export const Basic: StoryObj<typeof CommonFrame> = {
  args: {
    children: <Child>ここに子要素が入ります</Child>,
  },
};
