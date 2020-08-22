import { ITheme, theme as chakraTheme } from '@chakra-ui/core'

import { ColorsType } from './colors/colors'
import { Density, getTargetSpace } from './space'
import colors from './colors'

export type GSystemThemeType = {
  colors: ColorsType
  space: Record<string, string>
  target?: Density
} & Omit<ITheme, 'colors' | 'space'>

const theme = (target: Density = Density.DEFAULT): GSystemThemeType => ({
  ...chakraTheme,
  colors,
  target,
  space: getTargetSpace(target)
})

export default theme
