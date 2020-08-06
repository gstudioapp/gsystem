import { size } from '../../protocols/size'
import { variantColor } from '../../protocols/variant-color'
import { variant } from '../../protocols/variant'
import { ComponentProtocol } from '../../types/gstudio'

const ButtonProtocol: ComponentProtocol = {
  name: 'Button',
  themeProps: [variant],
  editorProps: [size, variantColor],
}

export default ButtonProtocol
