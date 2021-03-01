/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types';
import { getColorSchemeOrDefault } from '../utils/variants';
import { colors } from '../foundations';

export type ButtonSizes = 'sm' | 'md' | 'lg';
export type ButtonVariants = 'primary' | 'secondary' | 'danger';

export const Button: ThemeComponent<ButtonSizes, ButtonVariants, ChakraButtonProps> = {
  baseStyle: () => ({
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
        border: 'sm',
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
    danger: ({ colorScheme }) => {
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
