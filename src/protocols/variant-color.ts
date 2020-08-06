import { PropProtocol } from '../types/gstudio'

export const variantColor: PropProtocol = {
  name: 'variantColor',
  type: 'STRING',
  label: 'Color',
  description: 'Color',
  required: false,
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
