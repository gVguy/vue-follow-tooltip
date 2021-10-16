// rollup.config.js
import fs from 'fs'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

// Get browserslist config and remove ie from es build targets
const esbrowserslist = fs
   .readFileSync('./.browserslistrc')
   .toString()
   .split('\n')
   .filter(entry => entry && entry.substring(0, 2) !== 'ie')

const babelBaseConfig = {
   exclude: 'node_modules/**',
   extensions: ['.js'],
   babelHelpers: 'bundled'
}

// Customize configs for individual targets
const buildFormats = []

const esConfig = {
   input: 'src/tooltip.js',
   output: {
      file: 'dist/vue-tooltip.esm.js',
      format: 'esm',
      exports: 'named'
   },
   plugins: [
      commonjs(),
      babel({
         ...babelBaseConfig,
         presets: [['@babel/preset-env', { targets: esbrowserslist }]]
      })
   ]
}
buildFormats.push(esConfig)

const umdConfig = {
   input: 'src/tooltip.js',
   output: {
      compact: true,
      file: 'dist/vue-tooltip.ssr.js',
      format: 'cjs',
      name: 'Tooltip',
      exports: 'auto'
   },
   plugins: [commonjs(), babel(babelBaseConfig)]
}
buildFormats.push(umdConfig)

const unpkgConfig = {
   input: 'src/tooltip.js',
   output: {
      compact: true,
      file: 'dist/vue-tooltip.min.js',
      format: 'iife',
      name: 'Tooltip',
      exports: 'auto'
   },
   plugins: [
      commonjs(),
      babel(babelBaseConfig),
      terser({
         output: {
            ecma: 5
         }
      })
   ]
}
buildFormats.push(unpkgConfig)

// Export config
export default buildFormats
