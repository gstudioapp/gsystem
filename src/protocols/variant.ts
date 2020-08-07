import { PropStringProtocol, PropType } from '../types'

export type VariantProtocol = PropStringProtocol

export const variant: VariantProtocol = {
  name: 'variant',
  type: PropType.STRING,
  required: true,
  defaultValue: 'solid',
  values: ['outline', 'ghost', 'unstyled', 'link', 'solid']
}
