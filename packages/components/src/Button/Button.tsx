import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/core';
import React, { FC } from 'react';

import { Colors } from '../theme/colors';

export type ButtonProps = { variantColor?: Colors } & Omit<ChakraButtonProps, 'variantColor'>;

/**
 * Button component for user interaction
 */
export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ChakraButton {...props}>{children}</ChakraButton>;
};

Button.displayName = 'Button';
