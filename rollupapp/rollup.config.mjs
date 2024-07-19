import { defineConfig } from "rollup";
import terser from "@rollup/plugin-terser";

const input = "src/index.js";
const outDir = "dist";
const entryFileNames = "bundle.[format].js";

export default defineConfig([
  {
    input,
    output: {
      dir: outDir,
      entryFileNames,
      format: "cjs",
    },
    plugins: [
      terser({
        ecma: 2021,
        module: true,
        warnings: true,
      }),
    ],
  },
  {
    input,
    output: {
      dir: outDir,
      entryFileNames,
      format: "esm",
    },
  },
  {
    input,
    output: {
      dir: outDir,
      entryFileNames,
      format: "umd",
    },
  },
  {
    input,
    output: {
      dir: outDir,
      entryFileNames,
      format: "iife",
    },
  },
]);
