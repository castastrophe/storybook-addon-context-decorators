import type { DecoratorFunction } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals: DecoratorFunction = (StoryFn, context) => {
  const [{ reduceMotion }] = useGlobals();
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";
  console.log(context.globals, reduceMotion);

  // useEffect(() => {
  //   const rootElement = document.querySelector(isInDocs ? `#anchor--${context.id} .docs-story` : `#root`);
  //   // Execute your side effect here
  //   // For example, to manipulate the contents of the preview
  //   if (reduceMotion || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches || false) injectStyles(rootElement)
  //   else {
  //     const styleTag = rootElement.querySelector('#reduced-motion');
  //     if (styleTag) styleTag.remove();
  //   }
  // }, [reduceMotion]);

  return StoryFn();
};

function injectStyles(rootElement: Element) {
  const styleTag = document.createElement('style');
  styleTag.id = 'reduced-motion';
  styleTag.textContent = `
    --spectrum-global-animation-duration-100: 0ms;
    --spectrum-global-animation-duration-200: 0ms;
    --spectrum-global-animation-duration-300: 0ms;
    --spectrum-global-animation-duration-400: 0ms;
    --spectrum-global-animation-duration-500: 0ms;
    --spectrum-global-animation-duration-600: 0ms;
    --spectrum-global-animation-duration-700: 0ms;
    --spectrum-global-animation-duration-800: 0ms;
    --spectrum-global-animation-duration-900: 0ms;
    --spectrum-global-animation-duration-1000: 0ms;
    --spectrum-global-animation-duration-2000: 0ms;
    --spectrum-global-animation-duration-4000: 0ms;
    --spectrum-coachmark-animation-indicator-ring-duration: 0ms;
    --swc-test-duration: 1ms;
  `;
  rootElement.appendChild(styleTag);
}
