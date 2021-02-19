/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MenuProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types/theme-component';

export type MenuSelectSizes = 'sm' | 'md' | 'lg' | string;
export type MenuSelectVariants = 'default' | null;
export type MenuSelectParts = '';

export const MenuSelect: ThemeComponent<MenuSelectSizes, MenuSelectVariants, MenuProps> = {
  baseStyle: () => ({
    bg: 'ui.100',
    children: 'aaa',
  }),

  variants: {
    default: () => ({
      children: 'aaa',
    }),
  },

  defaultProps: {
    size: 'md',
    variant: null,
    colorScheme: null,
  },
};
