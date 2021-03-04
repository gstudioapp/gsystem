import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';

const formats = ['cjs', 'esm'];

const plugins = [
  image(),
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
    external: [
      '@chakra-ui/react',
      '@chakra-ui/icons',
      '@chakra-ui/theme-tools',
      '@emotion/core',
      '@emotion/styled',
      'framer-motion',
      'react',
      'lodash',
    ],
    output: formats.map((format) => ({
      file: `dist/index.${format}.js`,
      format,
      name: 'gsystem/ds',
      sourcemap: true,
    })),
  },
];
