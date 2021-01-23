import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';

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
  babel({
    exclude: 'node_modules/**',
  }),
];

export default [
  {
    input: 'src/components/index.ts',
    plugins,
    external: ['@chakra-ui/react', '@emotion/core', '@emotion/styled', 'framer-motion', 'react'],
    output: formats.map((format) => ({
      file: `dist/index.${format}.js`,
      format,
      name: 'gsystem/ds',
      sourcemap: true,
    })),
  },
];
