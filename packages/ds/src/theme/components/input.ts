/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InputProps as ChakraInputProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types/theme-component';
import { getColorSchemeOrDefault } from '../utils/variants';
import { colors } from '../foundations';

export type InputSizes = 'sm' | 'md' | 'lg' | string;
export type InputVariants = 'default' | null;

export const Input: ThemeComponent<InputSizes, InputVariants, ChakraInputProps> = {
  baseStyle: () => ({
    px: '3',
    outline: 'none',
    borderRadius: 'xs',
    fontFamily: 'Helvetica',
    transitionDuration: '0.2s',
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
    default: ({ colorScheme }) => {
      const colorSchemaDefault = getColorSchemeOrDefault({
        colorScheme,
        colorSchemeDefault: 'ui',
      });

      return {
        border: 'sm',
        color: `${colorSchemaDefault}.700`,
        borderColor: `${colorSchemaDefault}.200`,
        _placeholder: {
          color: `${colorSchemaDefault}.500`,
        },
        _hover: {
          borderColor: `${colorSchemaDefault}.500`,
        },
        _focus: {
          border: 'md',
          borderColor: 'primary.500',
          boxShadow: `0px 0px 0px 3px ${colors.primary[100]}`,
        },
        _disabled: {
          cursor: 'not-allowed',
          _hover: {
            borderColor: `${colorSchemaDefault}.200`,
          },
        },
        _invalid: {
          borderColor: 'supportA.600',
          _focus: {
            boxShadow: `0px 0px 0px 3px ${colors.supportA[100]}`,
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
