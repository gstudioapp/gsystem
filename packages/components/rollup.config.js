import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';

const formats = ['cjs', 'esm'];

const plugins = [
  json(),
  commonjs(),
  typescript({
    typescript: require('typescript'),
    tsconfig: 'tsconfig.app.json',
    tsconfigOverride: {
      compilerOptions: {
        declaration: true,
      },
    },
  }),
];

export default [
  {
    input: 'src/index.ts',
    plugins,
    external: ['@chakra-ui/core', '@emotion/core', '@emotion/styled', 'emotion-theming', 'react'],
    output: formats.map((format) => ({
      file: `dist/index.${format}.js`,
      format,
      name: 'gsystem/components',
      sourcemap: true,
    })),
  },
];
