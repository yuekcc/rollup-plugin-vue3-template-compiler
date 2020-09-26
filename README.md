# rollup-plugin-vue3-template-compiler

a rollup plugin for compiling vue3 template into render function. 

**only work on browser(DOM) with vue 3.0**, not support ssr.

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
    // add this plugin
    // include option is require.
    vueTemplateCompiler({include: "src/**/*.template.html"}), 
    buble()
  ]
}

```

## usage

### vue3 component source file

```js
import { defineComponent } from "vue";

// import the template file. rollup will parse it with this plugin.
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

### template file

```html
<div>{{tips}}</div>
```

## note

special thank you: [fergaldoyle/rollup-plugin-vue-template-compiler][fergaldoyle]

[fergaldoyle]: https://github.com/fergaldoyle/rollup-plugin-vue-template-compiler