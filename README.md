# rollup-plugin-vue3-template-compiler

a rollup for compiler vue3 template into render function.

## install 

```sh
$ npm i rollup-plugin-vue3-template-compiler --save-dev
```

## rollup config

```js
import vueTemplateCompiler from 'rollup-plugin-vue3-template-compiler';
import buble from '@rollup/plugin-buble';

export default {
  input: "src/index.js",
  output: {
    format: "iife",
    file: "dist/bundle.js"
  },
  plugins: [
    vueTemplateCompiler({include: "src/**/*.template.html"}),
    buble()
  ]
}

```

## usage

```js
import render from "./tips.template.html";
```

The `render` will the vue3 render function. You can use in a normal js file:

```js
import { defineComponent } from "vue";
import render from "./tips.template.html";

export const Tips = defineComponent({
  setup() {
    return {
      tips: 'hello, world'
    }
  },
  render, // the render function transform from 'tips.template.html'
});
```
