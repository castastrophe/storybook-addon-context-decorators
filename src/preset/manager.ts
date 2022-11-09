import { addons, types } from "@storybook/addons";

import "!!style-loader!css-loader!@spectrum-web-components/styles/all-medium-light.css";

import { ADDON_ID, TOOL_ID } from "../constants";
import { Tool } from "../components/Tool";

// Register the addon
addons.register(ADDON_ID, () => {
    // Register the tool
    addons.add(TOOL_ID, {
      type: types.TOOL,
      title: "Context",
      match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
      render: Tool,
    });
});
