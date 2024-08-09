import typescript from '@rollup/plugin-typescript';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { sveltePreprocess } from 'svelte-preprocess';
import atImport from 'postcss-import';

export default {
  input: 'src/widget/init-form-widget.ts',
  output: {
    format: 'iife',
    file: 'dist/widget/4m00s.js',
    sourcemap: false
  },
  plugins: [
    typescript({
      sourceMap: false,
      inlineSources: false
    }),
    svelte({
      emitCss: false,
      preprocess: sveltePreprocess({
        postcss: {
          plugins: [atImport()]
        }
      })
    }),
    resolve({ browser: true, dedupe: ['svelte'] }),
    terser()
  ]
};
