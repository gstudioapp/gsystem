/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThemeMultipartComponent } from '../../types/theme-component';

export type MenuSelectSizes = 'sm' | 'md' | 'lg' | string;
export type MenuSelectParts = 'menu' | 'menu-button' | 'menu-list' | 'menu-item';
export type MenuSelectVariants = 'default' | null;

export const MenuSelect: ThemeMultipartComponent<
  MenuSelectSizes,
  MenuSelectVariants,
  MenuSelectParts
> = {
  parts: ['menu', 'menu-button', 'menu-item', 'menu-list'],

  baseStyle: () => ({
    menu: {},
    'menu-button': {},
    'menu-list': {},
    'menu-item': {},
  }),

  variants: {
    default: () => ({
      menu: {},
      'menu-button': {},
      'menu-list': {},
      'menu-item': {},
    }),
  },

  defaultProps: {
    size: 'md',
    variant: null,
  },
};
