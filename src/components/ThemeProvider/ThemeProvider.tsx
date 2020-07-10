import {
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  useColorMode
} from '@chakra-ui/core'
import React, { FC } from 'react'

import customTheme from '../../theme'

export type ThemeProviderProps = {
  theme?: any
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = customTheme
}) => <ChakraThemeProvider theme={theme}>{children}</ChakraThemeProvider>

export default ThemeProvider
export { useColorMode, ColorModeProvider, CSSReset }
