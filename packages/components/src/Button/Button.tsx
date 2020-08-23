import { Button as ChakraButton, ButtonProps as Props } from '@chakra-ui/core';
import React, { FC } from 'react';

/**
 * Primary UI component for user interaction
 */
export const Button: FC<Props> = ({ children, ...props }) => {
  return <ChakraButton {...props}>{children}</ChakraButton>;
};

Button.displayName = 'Button';
