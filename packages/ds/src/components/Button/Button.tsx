import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import { ButtonSizes, ButtonVariants } from '../../theme';

export interface Props extends ButtonProps {
  size?: ButtonSizes;
  variant?: ButtonVariants | ButtonProps['variant'];
}

export const Button: FC<Props> = ({ size = 'md', variant = 'primary', children, ...props }) => (
  <ChakraButton variant={variant} size={size} {...props}>
    {children}
  </ChakraButton>
);

Button.displayName = 'Button';
