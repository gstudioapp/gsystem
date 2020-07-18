import {
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
  ColorModeProvider,
  ITheme,
  useTheme as useChakraTheme,
  useColorMode
} from '@chakra-ui/core'
import React, { FC } from 'react'

import { Density, Sizes } from '../../theme/space'
import customTheme from '../../theme'
import useButtonStyles from '../Button/Button.styles'

type GSystemTheme = { target: Density } & ITheme

export type ThemeProviderProps = {
  theme?: GSystemTheme
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  theme = customTheme
}) => <ChakraThemeProvider theme={theme}>{children}</ChakraThemeProvider>

const useTheme = () => useChakraTheme() as GSystemTheme

/* WIP: I'm testing a density hooks to manager theme and components */
const useDensity = (component: 'button', size: Sizes = Sizes.MEDIUM) => {
  const { target } = useTheme()
  const button: any = useButtonStyles(target, size)

  return { button }[component]
}

export default ThemeProvider
export { useColorMode, useDensity, useTheme, ColorModeProvider, CSSReset }
