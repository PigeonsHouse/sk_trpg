import { BrowserRouter } from "react-router";
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
          <BrowserRouter>
            <GlobalStyles />
            <Story />
          </BrowserRouter>
        </>
      );
    },
  ],
};

export default preview;
