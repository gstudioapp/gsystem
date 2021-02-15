import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  useStyleConfig,
} from '@chakra-ui/react';
import React, { FC } from 'react';

import { InputSizes, InputVariants } from '../../theme';

export interface InputProps extends ChakraInputProps {
  size?: InputSizes;
  variant?: InputVariants | ChakraInputProps['variant'];
}

export const Input: FC<InputProps> = ({ size, variant, ...props }) => {
  const styles = useStyleConfig('Input', { size, variant });

  return <ChakraInput sx={styles} {...props} />;
};

Input.displayName = 'Input';
