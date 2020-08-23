import { ITheme } from '@chakra-ui/core';

import { ColorsType } from './colors';
import { Density, Space } from './space';

export type GSystemThemeType = {
  colors: ColorsType;
  space: Space;
  target?: Density;
} & Omit<ITheme, 'colors' | 'space'>;
