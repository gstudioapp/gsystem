import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import React, { FC } from 'react';

import { Colors } from '../theme/colors';

export type ButtonProps = { colorScheme?: Colors } & Omit<ChakraButtonProps, 'colorScheme'>;

/**
 * Button component for user interaction
 */
export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ChakraButton colorSchema={'red'}>{children}</ChakraButton>;
};

Button.displayName = 'Button';
