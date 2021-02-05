import { extendTheme } from '@chakra-ui/react';

import { Density, getTargetSpace } from './space';
import { GSystemThemeType } from './types';
import { colors } from './colors';

const theme = extendTheme<GSystemThemeType>({
  colors,
  target: Density.DEFAULT,
  space: getTargetSpace(Density.DEFAULT),
} as GSystemThemeType);

export default theme;
