import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core';
import React, { FC } from 'react';

import { theme as gTheme, GSystemThemeType } from '../theme';

/**
 * Primary UI component for user interaction
 */
export const ThemeProvider: FC<{ theme?: GSystemThemeType }> = ({ children, theme = gTheme }) => {
  return <ChakraThemeProvider theme={theme as any}>{children}</ChakraThemeProvider>;
};

ThemeProvider.displayName = 'ThemeProvider';
