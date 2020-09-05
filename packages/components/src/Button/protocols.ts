import {
  IsLoadingProtocol,
  SizeProtocol,
  VariantColorProtocol,
  isLoading,
  size,
  variant,
  variantColor,
  ComponentProtocol,
} from '@gsystem/protocols';

type ButtonThemePropsProtocol = VariantColorProtocol;
type ButtonEditorPropsProtocol = SizeProtocol | VariantColorProtocol | IsLoadingProtocol;

export const buttonProtocol: ComponentProtocol<
  ButtonThemePropsProtocol,
  ButtonEditorPropsProtocol
> = {
  name: 'Button',
  themeProps: [variant],
  editorProps: [size, variantColor, isLoading],
};
