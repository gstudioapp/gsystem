/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThemeMultipartComponent } from '../../types';
import { getColorSchemeOrDefault } from '../utils/variants';
import { colors } from '../../theme/foundations';

export type MenuSelectSizes = 'sm' | 'md' | 'lg';
export type MenuSelectVariants = 'default';

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
      height: 'unset',
      minWidth: '7.5rem',
      paddingY: '0.5rem',
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

  sizes: {
    sm: () => ({
      'menu-button': {
        fontSize: 'sm',
        lineHeight: 'sm',
      },
      'menu-item': {
        fontSize: 'sm',
        lineHeight: 'sm',
      },
    }),

    md: () => ({
      'menu-button': {
        fontSize: 'md',
        lineHeight: 'md',
      },
      'menu-item': {
        fontSize: 'md',
        lineHeight: 'md',
      },
    }),

    lg: () => ({
      'menu-button': {
        fontSize: 'lg',
        lineHeight: 'lg',
      },
      'menu-item': {
        fontSize: 'lg',
        lineHeight: 'lg',
      },
    }),
  },

  variants: {
    default: ({ colorScheme }) => {
      const colorSchemaDefault = getColorSchemeOrDefault({
        colorScheme,
        colorSchemeDefault: 'ui',
      });

      return {
        'menu-button': {
          border: 'sm',
          borderColor: `${colorSchemaDefault}.200`,
          bg: `${colorSchemaDefault}.50`,
          color: `${colorSchemaDefault}.700`,
          _hover: {
            bg: `${colorSchemaDefault}.100`,
          },
          _focus: {
            boxShadow: `0px 0px 0px 3px ${colors[colorSchemaDefault][100]}`,
          },
          _disabled: {
            color: `${colorSchemaDefault}.500`,
            cursor: 'not-allowed',
            _hover: {
              bg: `${colorSchemaDefault}.50`,
            },
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
    size: 'sm',
    variant: 'default',
    colorScheme: null,
  },
};
