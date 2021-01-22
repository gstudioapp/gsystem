import React, { FC } from 'react';
import { ThemeProvider as ChakraProvider, extendTheme } from '@chakra-ui/react';

export const ThemeProvider: FC = ({ children }) => {
  return <ChakraProvider theme={extendTheme()}>{children}</ChakraProvider>;
};
