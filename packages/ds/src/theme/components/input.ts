/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { InputProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types/theme-component';
import { getColorSchemeOrDefault } from '../utils/variants';

export type InputSizes = 'sm' | 'md' | 'lg' | string;
export type InputVariants = 'default' | null;

export const Input: ThemeComponent<InputSizes, InputVariants, InputProps> = {
  baseStyle: ({ colorScheme }) => {
    const colorSchemaDefault = getColorSchemeOrDefault({
      colorScheme,
      colorSchemeDefault: 'ui',
    });

    return {
      borderRadius: 'xs',
      border: 'sm',
      borderColor: `${colorSchemaDefault}.200`,
    };
  },

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
    default: () => {
      return {};
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'default',
    colorScheme: null,
  },
};
