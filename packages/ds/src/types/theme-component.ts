export interface ThemeComponent<ComponentTokenSizes, Variants, ChakraComponentProps> {
  // Styles for the base style
  baseStyle: (props: ChakraComponentProps) => ChakraComponentProps;

  // Styles for the size variations
  sizes?: Record<ComponentTokenSizes & string, ChakraComponentProps>;

  // Styles for the visual style variations
  variants?: Record<Variants & string, (props: ChakraComponentProps) => ChakraComponentProps>;

  // The default `size` or `variant` values
  defaultProps?: {
    size: ComponentTokenSizes;
    variant: Variants;
  };
}
