import React, { FC } from 'react';
import { Text as ChakraText, TextProps as ChakraTextProps, useStyleConfig } from '@chakra-ui/react';

import { TextVariants } from '../../theme';
import { TextSizes } from '../../theme/components/text';

export interface TextProps extends ChakraTextProps {
  variant?: TextVariants;
  size?: TextSizes;
}

export const Text: FC<TextProps> = ({ children, variant, ...props }) => {
  const styles = useStyleConfig('Text', { variant });

  return (
    <ChakraText sx={styles} {...props}>
      {children}
    </ChakraText>
  );
};

Text.displayName = 'Text';
