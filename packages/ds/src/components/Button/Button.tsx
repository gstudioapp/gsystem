import React, { FC } from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  useStyleConfig,
} from '@chakra-ui/react';

import { ButtonSizes, ButtonVariants } from '../../theme';

export interface ButtonProps extends ChakraButtonProps {
  size?: ButtonSizes;
  variant?: ButtonVariants | ChakraButtonProps['variant'];
}

export const Button: FC<ButtonProps> = ({ size, variant, children, ...props }) => {
  const styles = useStyleConfig('Button', { size, variant });

  return (
    <ChakraButton sx={styles} {...props}>
      {children}
    </ChakraButton>
  );
};

Button.displayName = 'Button';
