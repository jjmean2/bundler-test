import * as esbuild from "esbuild";

const base = {
  entryPoints: ["src/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
};

esbuild.build({
  ...base,
  format: "cjs",
  outfile: `dist/bundle.cjs.js`,
});

esbuild.build({
  ...base,
  format: "esm",
  outfile: `dist/bundle.esm.js`,
});
esbuild.build({
  ...base,
  format: "iife",
  outfile: `dist/bundle.iife.js`,
});
