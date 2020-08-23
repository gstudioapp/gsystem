import { theme as chakraTheme } from '@chakra-ui/core'

import { Density, getTargetSpace } from './space'
import { GSystemThemeType } from './types'
import { colors } from './colors'

const theme: GSystemThemeType = {
  ...chakraTheme,
  colors,
  target: Density.DEFAULT,
  space: getTargetSpace(Density.DEFAULT)
}

export default theme
