import React, { FC } from 'react';
import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
  useStyleConfig,
} from '@chakra-ui/react';

import { HeadingSizes, HeadingVariants } from '../../theme';

export interface HeadingProps extends ChakraHeadingProps {
  variant?: HeadingVariants;
  size?: HeadingSizes;
}

export const Heading: FC<HeadingProps> = ({ size, variant, children, ...props }) => {
  const styles = useStyleConfig('Heading', { size, variant });

  return (
    <ChakraHeading sx={styles} {...props}>
      {children}
    </ChakraHeading>
  );
};
