import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import { ButtonSizes, ButtonVariants } from '../../theme';

/**
 * Button component for user interaction
 */
export interface Props extends ButtonProps {
  size?: ButtonSizes;
  variant?: ButtonVariants | ButtonProps['variant'];
}

export const Button: FC<Props> = ({ size, variant, children, ...props }) => {
  return (
    <ChakraButton variant={variant} size={size} {...props}>
      {children}
    </ChakraButton>
  );
};

Button.displayName = 'Button';
