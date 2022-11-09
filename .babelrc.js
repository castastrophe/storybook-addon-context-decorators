module.exports = {
  presets: [
    ["@babel/preset-env", {
      shippedProposals: true,
      targets: {
        node: "16"
      }
    }],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  env: {
    esm: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false,
          },
        ],
      ],
    },
  },
};
