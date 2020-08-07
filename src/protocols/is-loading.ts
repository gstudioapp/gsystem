import { PropBooleanProtocol, PropType } from '../types'

export type IsLoadingProtocol = PropBooleanProtocol

export const isLoading: IsLoadingProtocol = {
  name: 'size',
  type: PropType.BOOLEAN,
  required: false,
  defaultValue: false,
  values: [true, false]
}
