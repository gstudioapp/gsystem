import { ButtonProps } from '@chakra-ui/react';

import { ThemeComponent } from '../../types/theme-component';

export type ButtonSizes = 'sm' | 'md' | 'lg' | string;
export type ButtonVariants = 'primary' | 'secondary' | 'destructive' | 'outline';

export const Button: ThemeComponent<ButtonSizes, ButtonVariants, ButtonProps> = {
  baseStyle: (props) => ({
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
    primary: (): Record<string, any> => {
      const colorScheme = 'primary';
      return {
        bg: `${colorScheme}.500`,
        color: 'white',
        _hover: {
          bg: `${colorScheme}.700`,
        },
      };
    },
    secondary: (): Record<string, any> => {
      const colorScheme = 'gray';
      const colorMain = `${colorScheme}.800`;
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
    outline: (): Record<string, any> => {
      const colorScheme = 'primary';
      return {
        bg: `${colorScheme}.50`,
        borderColor: `${colorScheme}.500`,
        border: 'sm',
        color: `${colorScheme}.500`,
        _hover: {
          bg: `${colorScheme}.100`,
        },
      };
    },
    destructive: (): Record<string, any> => {
      const colorScheme = 'supportA';
      return {
        bg: `${colorScheme}.500`,
        color: 'white',
        _hover: {
          bg: `${colorScheme}.600`,
        },
      };
    },
  },

  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};
