import { ComponentProtocol } from '../../types'
import { IsLoadingProtocol, isLoading } from '../../protocols/is-loading'
import { SizeProtocol, size } from '../../protocols/size'
import {
  VariantColorProtocol,
  variantColor
} from '../../protocols/variant-color'
import { variant } from '../../protocols/variant'

type ButtonThemePropsProtocol = VariantColorProtocol
type ButtonEditorPropsProtocol =
  | SizeProtocol
  | VariantColorProtocol
  | IsLoadingProtocol

/* eslint-disable-next-line */
const ButtonProtocol: ComponentProtocol<ButtonThemePropsProtocol, ButtonEditorPropsProtocol> = {
  name: 'Button',
  themeProps: [variant],
  editorProps: [size, variantColor, isLoading]
}

export default ButtonProtocol
