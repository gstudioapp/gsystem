import { Theme } from '@chakra-ui/react';

import { ColorsType } from './colors';
import { Density, Space } from './space';

export type GSystemThemeType = {
  colors: ColorsType;
  space: Space;
  target?: Density;
} & Omit<Theme, 'colors' | 'space'>;
