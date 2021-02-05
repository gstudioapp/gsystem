export type ColorHues = Record<string, any>;

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
  | 'support.warning';

export type ColorsType = {
  brand: Brand;
  support: Support;
} & ColorHues;
