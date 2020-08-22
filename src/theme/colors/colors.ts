import { ColorHues, VariantColor, theme as chakraTheme } from '@chakra-ui/core'

import brand from './brand'
import support from './support'

export type Brand = typeof brand
export type Support = typeof support

export type Colors =
  | 'brand.primary'
  | 'support.danger'
  | 'support.info'
  | 'support.success'
  | 'support.warning'

export type ColorsType = {
  brand: Brand
  support: Support
} & Record<VariantColor, ColorHues | string>

export default {
  ...chakraTheme.colors,
  brand,
  support
}
