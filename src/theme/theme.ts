import {theme, ITheme, ColorHues} from '@chakra-ui/core'

type GSystemTheme = {
  colors: { brand: Record<string, ColorHues> }
} & ITheme

const gsystemTheme: GSystemTheme = {
  ...theme,
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
