import { PropProtocol } from '../types/gstudio'

export const variant: PropProtocol = {
  name: 'variant',
  type: 'STRING',
  label: 'Variant',
  description: 'Variation of component',
  required: true,
  values: ['outline', 'ghost', 'unstyled', 'link', 'solid']
}
