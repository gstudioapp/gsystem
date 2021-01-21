import { Button as ChakraButton } from '@chakra-ui/react';
import React, { FC } from 'react';

/**
 * Button component for user interaction
 */
export const Button: FC = () => {
  return <ChakraButton>Click me!</ChakraButton>;
};

Button.displayName = 'Button';
