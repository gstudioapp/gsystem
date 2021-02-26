import React, { FC } from 'react';
import { Box as ChakraBox, BoxProps as ChakraBoxProps, useStyleConfig } from '@chakra-ui/react';

export interface CardProps extends ChakraBoxProps {
  variant: string;
  size: string;
}

export const Card: FC<CardProps> = ({ size, variant, ...props }) => {
  const styles = useStyleConfig('Card', { size, variant });

  return <ChakraBox sx={styles} {...props} />;
};
