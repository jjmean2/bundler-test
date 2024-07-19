const entry = "./src/index.js";
const filename = (type) => `bundle.${type}.js`;
const libraryName = "myLib";
/**
 * @type {import('webpack').Configuration[]}
 */
const config = [
  {
    entry,
    output: {
      filename: filename("cjs"),
      library: {
        type: "commonjs",
      },
    },
  },
  {
    entry,
    output: {
      filename: filename("umd"),
      library: {
        type: "umd",
      },
    },
  },
  {
    experiments: {
      outputModule: true,
    },
    entry,
    output: {
      filename: filename("esm"),
      library: {
        type: "module",
      },
    },
  },
  {
    entry,
    output: {
      filename: filename("window"),
      library: {
        type: "window",
      },
    },
  },
];

export default config;
