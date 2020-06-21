import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core'
import React, { FC } from 'react'

import customTheme from '../../theme/theme'

export type ThemeProviderProps = {
  theme?: any
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = customTheme
}) => <ChakraThemeProvider theme={theme}>{children}</ChakraThemeProvider>

export default ThemeProvider
