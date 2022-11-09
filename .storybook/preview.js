// import context from '../src';

import light from '!!style-loader?injectType=lazyStyleTag!css-loader!../stories/contexts/light.css';
import dark from '!!style-loader?injectType=lazyStyleTag!css-loader!../stories/contexts/dark.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  context: {
    color: {
      title: "Color",
      items: [
        { value: light, title: "Light", fill: "#fff" },
        { value: dark, title: "Dark", fill: "#444" },
      ],
      default: 'light',
    },
    reduceMotion: {
      title: 'Reduce motion',
      default: false,
    }
  }
};

// export const globalTypes = {
//   color: {
//     options: {
//       'Light': light,
//       'Dark': dark,
//     },
//     default: 'Light',
//   },
// };
