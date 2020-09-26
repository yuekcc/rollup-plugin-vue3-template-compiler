import buble from "@rollup/plugin-buble";

export default {
  input: "src/index.js",
  output: [
    { file: "index.js", format: "cjs", exports: "auto" },
    { file: "index.mjs", format: "esm" },
  ],
  plugins: [buble()],
  external: ["@rollup/pluginutils", "@vue/compiler-dom"],
};
