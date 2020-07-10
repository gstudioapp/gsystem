import { theme as chakraTheme } from '@chakra-ui/core'

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      primary: {
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

export default theme
