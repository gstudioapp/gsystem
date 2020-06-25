import {
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider
} from '@chakra-ui/core'
import React, { FC } from 'react'

import customTheme from '../../theme/theme'

export type ThemeProviderProps = {
  theme?: any
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = customTheme
}) => (
  <ChakraThemeProvider theme={theme}>
    <ColorModeProvider>{children}</ColorModeProvider>
  </ChakraThemeProvider>
)

export default ThemeProvider
