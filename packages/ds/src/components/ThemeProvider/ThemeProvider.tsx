import React, { FC } from 'react';
import { ThemeProvider as ChakraProvider, ThemeProviderProps } from '@chakra-ui/react';

import gTheme from '../../theme';

export const ThemeProvider: FC<Partial<ThemeProviderProps>> = ({ children, theme = gTheme }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
