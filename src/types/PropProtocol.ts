import { PropType } from './PropType'

export interface PropProtocol<T> {
  defaultValue: T
  name: string
  required: boolean
  type: PropType
  values: T[]
}

export interface PropBooleanProtocol extends PropProtocol<boolean> {}
export interface PropStringProtocol extends PropProtocol<string> {}
