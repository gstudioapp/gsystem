/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ButtonProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types/theme-component';
import { getColorSchemeOrDefault } from '../utils/variants';
import { colors } from '../foundations';

export type ButtonSizes = 'sm' | 'md' | 'lg' | string;
export type ButtonVariants = 'primary' | 'secondary' | 'destructive' | 'outline' | null;

export const Button: ThemeComponent<ButtonSizes, ButtonVariants, ButtonProps> = {
  baseStyle: () => ({
    px: 'sm',
    paddingX: '3',
    borderRadius: 'sm',
    fontWeight: 'normal',
  }),

  sizes: {
    sm: {
      fontSize: 'sm',
      lineHeight: 'sm',
    },
    md: {
      fontSize: 'md',
      lineHeight: 'md',
    },
    lg: {
      fontSize: 'lg',
      lineHeight: 'lg',
    },
  },

  variants: {
    primary: ({ colorScheme }) => {
      const colorSchemaDefault = getColorSchemeOrDefault({
        colorScheme,
        colorSchemeDefault: 'primary',
      });

      return {
        bg: `${colorSchemaDefault}.500`,
        color: 'white',
        _hover: {
          bg: `${colorSchemaDefault}.700`,
        },
        _focus: {
          boxShadow: `0px 0px 0px 3px ${colors[colorSchemaDefault][200]}`,
        },
        _disabled: {
          bg: `${colorSchemaDefault}.300`,
          cursor: 'not-allowed',
        },
      };
    },
    secondary: ({ colorScheme }) => {
      const colorSchemaDefault = getColorSchemeOrDefault({
        colorScheme,
        colorSchemeDefault: 'ui',
      });

      return {
        bg: `${colorSchemaDefault}.50`,
        border: '1px solid',
        borderColor: `${colorSchemaDefault}.200`,
        color: `${colorSchemaDefault}.700`,
        textStyle: 'custom',
        _hover: {
          bg: `${colorSchemaDefault}.100`,
        },
        _focus: {
          boxShadow: `0px 0px 0px 3px ${colors[colorSchemaDefault][200]}`,
        },
        _disabled: {
          color: `${colorSchemaDefault}.500`,
          cursor: 'not-allowed',
          _hover: {
            bg: `${colorSchemaDefault}.50`,
          },
        },
      };
    },
    outline: ({ colorScheme }) => {
      const colorSchemaDefault = getColorSchemeOrDefault({
        colorScheme,
        colorSchemeDefault: 'primary',
      });

      return {
        bg: `${colorSchemaDefault}.50`,
        borderColor: `${colorSchemaDefault}.500`,
        border: 'sm',
        color: `${colorSchemaDefault}.500`,
        _hover: {
          bg: `${colorSchemaDefault}.100`,
        },
        _focus: {
          boxShadow: `0px 0px 0px 3px ${colors[colorSchemaDefault][200]}`,
        },
        _disabled: {
          cursor: 'not-allowed',
          color: `${colorSchemaDefault}.300`,
          borderColor: `${colorSchemaDefault}.300`,
          _hover: {
            bg: `${colorSchemaDefault}.50`,
          },
        },
      };
    },
    destructive: ({ colorScheme }) => {
      const colorSchemaDefault = getColorSchemeOrDefault({
        colorScheme,
        colorSchemeDefault: 'supportA',
      });

      return {
        bg: `${colorSchemaDefault}.500`,
        color: 'white',
        _hover: {
          bg: `${colorSchemaDefault}.600`,
        },
        _focus: {
          boxShadow: `0px 0px 0px 3px ${colors[colorSchemaDefault][200]}`,
        },
        _disabled: {
          cursor: 'not-allowed',
          bg: `${colorSchemaDefault}.300`,
          borderColor: `${colorSchemaDefault}.300`,
          _hover: {
            bg: `${colorSchemaDefault}.300`,
          },
        },
      };
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'primary',
    colorScheme: null,
  },
};
