import { IconProps as ChakraIconProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types';

export type IconSizes = 'sm' | 'md' | 'lg';
export type IconVariants = 'default';

export const Icon: ThemeComponent<IconSizes, IconVariants, ChakraIconProps> = {
  baseStyle: () => ({}),

  sizes: {
    sm: {
      boxSize: '0.75rem',
    },
    md: {
      boxSize: '1.125rem',
    },
    lg: {
      boxSize: '1.5rem',
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'default',
    colorScheme: null,
  },
};
