import React, { FC } from 'react';
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useStyleConfig,
} from '@chakra-ui/react';

import { InputSizes, InputVariants } from '../../theme';

export interface InputProps extends ChakraInputProps {
  size?: InputSizes;
  variant?: InputVariants | ChakraInputProps['variant'];
}

export const Input: FC<InputProps> = ({ size, variant, colorScheme, ...props }) => {
  const styles = useStyleConfig('Input', { size, variant, colorScheme });

  return <ChakraInput data-testid="input" sx={styles} {...props} />;
};

Input.displayName = 'Input';
