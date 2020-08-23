import {
  IsLoadingProtocol,
  SizeProtocol,
  VariantColorProtocol,
  isLoading,
  size,
  variant,
  variantColor,
} from '@gsystem/protocols';
import { ComponentProtocol } from '@gsystem/protocols/dist/types';

type ButtonThemePropsProtocol = VariantColorProtocol;
type ButtonEditorPropsProtocol = SizeProtocol | VariantColorProtocol | IsLoadingProtocol;

const ButtonProtocol: ComponentProtocol<ButtonThemePropsProtocol, ButtonEditorPropsProtocol> = {
  name: 'Button',
  themeProps: [variant],
  editorProps: [size, variantColor, isLoading],
};

export default ButtonProtocol;
