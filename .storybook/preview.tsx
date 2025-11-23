import type { Preview } from "@storybook/react-vite";
import { GlobalStyles } from "../src/components";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
  decorators: [
    (Story: React.FC) => {
      return (
        <>
          <GlobalStyles />
          <Story />
        </>
      );
    },
  ],
};

export default preview;
