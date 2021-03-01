/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HeadingProps as ChakraHeadingProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types';

export type HeadingVariants = 'subtitle' | 'title';
export type HeadingSizes = ChakraHeadingProps['size'];

export const Heading: ThemeComponent<HeadingSizes, HeadingVariants, ChakraHeadingProps> = {
  baseStyle: () => ({
    fontFamily: 'heading',
  }),

  variants: {
    subtitle: () => ({
      fontSize: 'lg',
      fontWeight: 800,
    }),
    title: () => ({
      fontSize: {
        md: '3xl',
        base: '4xl',
        lg: '5xl',
      },
      fontWeight: 800,
    }),
  },

  defaultProps: {
    size: null,
    variant: 'subtitle',
    colorScheme: null,
  },
};
