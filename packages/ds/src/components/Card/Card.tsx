import React, { FC } from 'react';
import { Box as ChakraBox, BoxProps as ChakraBoxProps, useStyleConfig } from '@chakra-ui/react';

import { CardSizes, CardVariants } from '../../theme';

export interface CardProps extends ChakraBoxProps {
  variant?: CardVariants;
  size?: CardSizes;
}

export const Card: FC<CardProps> = ({ size, variant, children, ...props }) => {
  const styles = useStyleConfig('Card', { size, variant });

  return (
    <ChakraBox sx={styles} {...props}>
      {children}
    </ChakraBox>
  );
};
