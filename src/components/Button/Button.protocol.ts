import isLoading from '../../protocols/is-loading'
import size from '../../protocols/size'
import variant from '../../protocols/variant'
import variantColor from '../../protocols/variant-color'

const ButtonProtocol = {
  name: 'Button',
  props: [isLoading, size, variant, variantColor]
}

export default ButtonProtocol
