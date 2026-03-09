import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      React.createElement(Story)
    ),
  ],
};

export default preview;
