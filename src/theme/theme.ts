import { theme as chakraTheme } from '@chakra-ui/core'

import { Density } from './space'
import colors from './colors'

const theme = {
  ...chakraTheme,
  colors,
  target: Density.DEFAULT
}

export default theme
