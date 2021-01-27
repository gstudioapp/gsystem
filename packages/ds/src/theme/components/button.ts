/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ButtonProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types/theme-component';
import { getColorSchemeOrDefault } from '../utils/variants';

export type ButtonSizes = 'sm' | 'md' | 'lg' | string;
export type ButtonVariants = 'primary' | 'secondary' | 'destructive' | 'outline' | null;

export const Button: ThemeComponent<ButtonSizes, ButtonVariants, ButtonProps> = {
  baseStyle: () => ({
    py: 'sm',
    px: 'md',
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
      };
    },
    secondary: ({ colorScheme }) => {
      const colorSchemaDefault = getColorSchemeOrDefault({
        colorScheme,
        colorSchemeDefault: 'gray',
      });

      const colorMain = `${colorSchemaDefault}.800`;
      const colorContrasted = 'white';

      return {
        bg: colorContrasted,
        border: '1px solid',
        borderColor: colorMain,
        color: colorMain,
        textStyle: 'custom',
        _hover: {
          bg: colorMain,
          color: colorContrasted,
          borderColor: colorContrasted,
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
      };
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'primary',
    colorScheme: null,
  },
};
