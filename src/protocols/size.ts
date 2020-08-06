import { PropProtocol } from '../types/gStudio'

export const size: PropProtocol = {
  name: 'size',
  type: 'STRING',
  label: 'Button Size',
  description: 'Size of the button',
  values: ['xs', 'sm', 'md', 'lg'],
  required: true,
}
