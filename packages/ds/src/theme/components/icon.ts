import { IconProps as ChakraIconProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types/theme-component';

export type IconSizes = 'sm' | 'md' | 'lg' | string;
export type IconVariants = 'default' | null;

export const Icon: ThemeComponent<IconSizes, IconVariants, ChakraIconProps> = {
  baseStyle: () => ({}),

  defaultProps: {
    size: 'md',
    variant: 'default',
    colorScheme: null,
  },
};
