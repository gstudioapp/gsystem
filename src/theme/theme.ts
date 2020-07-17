import { theme as chakraTheme } from '@chakra-ui/core'

import colors from './colors'
import customSpace, { Density } from './space'

const theme = {
  ...chakraTheme,
  ...customSpace,
  colors,
  target: Density.DEFAULT,
  space: customSpace[Density.DEFAULT]
}

export default theme
