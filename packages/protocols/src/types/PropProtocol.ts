import { PropType } from './PropType';

export interface PropProtocol<T> {
  defaultValue: T;
  name: string;
  required: boolean;
  type: PropType;
  values?: T[];
}

export type PropBooleanProtocol = PropProtocol<boolean>;
export type PropStringProtocol = PropProtocol<string>;
