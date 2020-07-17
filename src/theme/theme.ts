import {theme, ITheme, ColorHues} from '@chakra-ui/core'

import colors from './colors'
import customSpace, { Density } from './space'

type GSystemTheme = {
  colors: { brand: Record<string, ColorHues> }
  target: Density
} & ITheme

const gsystemTheme: GSystemTheme = {
  ...theme,
  ...customSpace,
  colors,
  target: Density.DEFAULT,
  space: customSpace[Density.DEFAULT]
}

export default gsystemTheme
