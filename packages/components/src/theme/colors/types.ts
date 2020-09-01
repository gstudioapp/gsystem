import { ColorHues, VariantColor } from '@chakra-ui/core';

export type Brand = {
  primary: ColorHues;
};
export type Support = {
  danger: ColorHues;
  info: ColorHues;
  success: ColorHues;
  warning: ColorHues;
};

export type Colors =
  | 'brand.primary'
  | 'support.danger'
  | 'support.info'
  | 'support.success'
  | 'support.warning'
  | VariantColor;

export type ColorsType = {
  brand: Brand;
  support: Support;
} & Record<VariantColor, ColorHues | string>;
