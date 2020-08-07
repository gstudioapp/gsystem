import { PropStringProtocol, PropType } from '../types'

export type VariantColorProtocol = PropStringProtocol

export const variantColor: VariantColorProtocol = {
  name: 'variantColor',
  type: PropType.STRING,
  required: false,
  defaultValue: 'red',
  values: [
    'brand.primary',
    'support.danger',
    'support.info',
    'support.success',
    'support.warning',
    'black',
    'white',
    'whiteAlpha',
    'blackAlpha',
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
    'linkedin',
    'facebook',
    'messenger',
    'whatsapp',
    'twitter',
    'telegram'
  ]
}
