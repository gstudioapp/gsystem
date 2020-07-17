import { VariantColor, theme as chakraTheme } from '@chakra-ui/core'

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
  | VariantColor

export default {
  ...chakraTheme.colors,
  brand,
  support
}
