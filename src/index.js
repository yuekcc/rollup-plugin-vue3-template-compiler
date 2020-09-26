import { createFilter } from "@rollup/pluginutils";
import { compile as domCompile } from "@vue/compiler-dom";

function makeExportDefault(code) {
  return code + "\n\n" + `export default render;`;
}

function build(opts = {}) {
  if (!opts.include) {
    throw new Error("require option: include");
  }

  const filter = createFilter(opts.include, opts.exclude);
  return {
    name: "vue3-template-compiler",
    transform(code, id) {
      if (filter(id)) {
        const compiled = domCompile(code, {
          name: id,
          mode: "module",
          prefixIdentifiers: true,
          hoistStatic: true,
          cacheHandlers: true,
          sourceMap: true,
        });

        return {
          code: makeExportDefault(compiled.code),
          map: compiled.map,
        };
      }
    },
  };
}

export default build;
