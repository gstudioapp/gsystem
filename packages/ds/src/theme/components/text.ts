/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { TextProps as ChakraTextProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types';

export type TextVariants = 'caption' | 'body-1' | 'body-2';
export type TextSizes = ChakraTextProps['size'];

export const Text: ThemeComponent<TextSizes, TextVariants, ChakraTextProps> = {
  baseStyle: () => ({
    fontFamily: 'body',
  }),

  variants: {
    caption: () => ({
      fontSize: 'xs',
    }),
    'body-1': () => ({
      fontSize: 'base',
    }),
    'body-2': () => ({
      fontSize: 'sm',
      fontWeight: 'normal',
    }),
  },

  defaultProps: {
    size: null,
    variant: 'body-1',
    colorScheme: null,
  },
};
