'use strict';

var pluginutils = require('@rollup/pluginutils');
var compilerDom = require('@vue/compiler-dom');

function makeExportDefault(code) {
  return code + "\n\n" + "export default render;";
}

function build(opts) {
  if ( opts === void 0 ) opts = {};

  if (!opts.include) {
    throw new Error("require option: include");
  }

  var filter = pluginutils.createFilter(opts.include, opts.exclude);
  return {
    name: "vue3-template-compiler",
    transform: function transform(code, id) {
      if (filter(id)) {
        var compiled = compilerDom.compile(code, {
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

module.exports = build;
