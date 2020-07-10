import {theme, ITheme, ColorHues} from '@chakra-ui/core'

import customSpace, { Density } from './space'

type GSystemTheme = {
  colors: { brand: Record<string, ColorHues> }
  target: Density
} & ITheme

const gsystemTheme: GSystemTheme = {
  ...theme,
  ...customSpace,
  target: Density.DEFAULT,
  space: customSpace[Density.DEFAULT],
  colors: {
    ...theme.colors,
    brand: {
      primary: {
        50: '#f3eaff',
        100: '#e7d5ff',
        200: '#ceacff',
        300: '#b682ff',
        400: '#9d59ff',
        500: '#852FFF',
        600: '#6a26cc',
        700: '#501c99',
        800: '#351366',
        900: '#1b0933'
      }
    }
  }
}

export default gsystemTheme
