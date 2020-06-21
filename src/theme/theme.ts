import { theme as chakraTheme } from '@chakra-ui/core'

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    brand: {
      primary: {
        500: 'gray'
      },
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac'
    }
  }
}

export default theme
