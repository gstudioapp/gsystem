/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThemeMultipartComponent } from '../../types/theme-component';
import { getColorSchemeOrDefault } from '../utils/variants';
import { colors } from '../../theme/foundations';

export type MenuSelectSizes = string;
export type MenuSelectVariants = 'default' | null;

type MenuSelectParts = 'menu-button' | 'menu-list' | 'menu-item';

export const MenuSelect: ThemeMultipartComponent<
  MenuSelectSizes,
  MenuSelectVariants,
  MenuSelectParts
> = {
  parts: ['menu-button', 'menu-item', 'menu-list'],

  baseStyle: () => ({
    'menu-button': {
      zIndex: 2,
      fontSize: 'sm',
      lineHeight: '0.875rem',
    },
    'menu-list': {
      pt: '3',
      minWidth: 'unset',
      boxShadow: 'unset',
      borderRadius: 'xs',
      transform: 'translate(0px, -16px) !important',
    },
    'menu-item': {
      fontSize: 'sm',
      fontWeight: 'normal',
    },
  }),

  variants: {
    default: ({ colorScheme }) => {
      const colorSchemaDefault = getColorSchemeOrDefault({
        colorScheme,
        colorSchemeDefault: 'ui',
      });

      return {
        'menu-button': {
          border: 'sm',
          height: '2.25rem',
          borderColor: `${colorSchemaDefault}.200`,
          bg: `${colorSchemaDefault}.50`,
          color: `${colorSchemaDefault}.700`,
          _hover: {
            bg: `${colorSchemaDefault}.100`,
          },
          _focus: {
            boxShadow: `0px 0px 0px 3px ${colors[colorSchemaDefault][100]}`,
          },
        },
        'menu-list': {
          border: 'xs',
          borderColor: `${colorSchemaDefault}.100`,
        },
        'menu-item': {
          color: `${colorSchemaDefault}.700`,
          _hover: {
            bg: `${colorSchemaDefault}.100`,
          },
          _focus: {
            bg: `${colorSchemaDefault}.100`,
          },
        },
      };
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'default',
    colorScheme: null,
  },
};
