import { ColorHues, ITheme, theme as chakraTheme } from '@chakra-ui/core'

import { Density, getTargetSpace } from './space'
import colors from './colors'

type GSystemTheme = {
  colors: { brand: Record<string, ColorHues> }
  space: Record<string, string>
  target: Density
} & Omit<ITheme, 'space'>

const theme: GSystemTheme = {
  ...chakraTheme,
  colors,
  space: getTargetSpace(Density.DEFAULT),
  target: Density.DEFAULT
}

export default theme
