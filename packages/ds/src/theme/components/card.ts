/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { BoxProps as ChakraBoxProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types/theme';

export type CardSizes = 'sm' | 'md' | 'lg';
export type CardVariants = 'default';

export const Card: ThemeComponent<CardSizes, CardVariants, ChakraBoxProps> = {
  baseStyle: () => ({
    bg: 'white',
  }),

  sizes: {
    sm: {
      borderRadius: 'sm',
      padding: 'sm',
    },
    md: {
      borderRadius: 'md',
      padding: 'md',
    },
    lg: {
      borderRadius: 'lg',
      padding: 'lg',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'default',
    colorScheme: null,
  },
};
