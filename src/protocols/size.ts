import { PropStringProtocol, PropType } from '../types'

export type SizeProtocol = PropStringProtocol

export const size: SizeProtocol = {
  name: 'size',
  type: PropType.STRING,
  required: true,
  defaultValue: 'sm',
  values: ['xs', 'sm', 'md', 'lg']
}
