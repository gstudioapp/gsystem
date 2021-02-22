import { SystemStyleObject, Theme } from '@chakra-ui/react';

interface StyleOptions {
  theme: Theme;
  colorMode: 'light' | 'dark';
  colorScheme: string;
}

type MultipartStyleInterpolation<ComponentParts> = Partial<
  Record<ComponentParts & string, SystemStyleObject>
>;

/** Provides a object model following the normal component style interface inside Chakra */
export interface ThemeComponent<
  ComponentTokenSizes,
  ComponentVariants,
  ChakraComponentProps = SystemStyleObject
> {
  /**  Styles for the base style */
  baseStyle: (props: ChakraComponentProps) => ChakraComponentProps;

  /**  Styles for the size variations */
  sizes?: Record<ComponentTokenSizes & string, ChakraComponentProps>;

  /**  Styles for the visual style variations */
  variants?: Record<
    ComponentVariants & string,
    (props: ChakraComponentProps) => ChakraComponentProps
  >;

  /** The default `size` or `variant` values */
  defaultProps?: {
    size: ComponentTokenSizes;
    variant: ComponentVariants;
  };
}

/** Provides a object model following the multipart component style interface inside Chakra */
export interface ThemeMultipartComponent<ComponentTokenSizes, ComponentVariants, ComponentParts> {
  /** Definition of the component parts */
  parts: Array<ComponentParts>;

  /** Styles for the base style inside each part */
  baseStyle: (props: StyleOptions) => MultipartStyleInterpolation<ComponentParts>;

  /** Styles for the size variations inside each part */
  sizes?: Record<
    ComponentTokenSizes & string,
    (props: StyleOptions) => MultipartStyleInterpolation<ComponentParts>
  >;

  /** Styles for the visual style variations inside each part */
  variants?: Record<
    ComponentVariants & string,
    (props: StyleOptions) => MultipartStyleInterpolation<ComponentParts>
  >;

  /** The default `size` or `variant` values */
  defaultProps?: {
    size: ComponentTokenSizes;
    variant: ComponentVariants;
  };
}
