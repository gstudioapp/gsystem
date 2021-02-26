import { extendTheme } from '@chakra-ui/react';

import {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
} from './foundations';

import { Button, Input, MenuSelect } from './components';
import { layerStyles, textStyles } from './styles';

export * from './utils';

export const theme = extendTheme({
  // Foundations
  borders,
  breakpoints,
  colors,
  radii,
  shadows,
  space,

  // Typography
  fonts,
  fontSizes,
  fontWeights,

  components: {
    Button,
    Input,
    MenuSelect,
  },

  textStyles,
  layerStyles,

  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});
