export enum Density {
  DEFAULT = 'DEFAULT',
  COMPACT = 'COMPACT'
}

export enum Sizes {
  LARGE = 'lg',
  MEDIUM = 'md',
  SMALL = 'sm',
  X_SMALL = 'xs'
}

const COMPACT = {
  px: '1px',
  0: '0',
  1: '0.1rem',
  2: '0.1rem',
  3: '0.1rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '1rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem'
}

const DEFAULT = {
  px: '1px',
  0: '0',
  1: '0.2rem',
  2: '0.4rem',
  3: '0.6rem',
  4: '0.8rem',
  5: '1rem',
  6: '1.2rem',
  8: '1.4rem',
  10: '1.8rem',
  12: '2rem',
  16: '3rem',
  20: '4rem',
  24: '5rem',
  32: '6rem',
  40: '7rem',
  48: '8rem',
  56: '9rem',
  64: '10rem'
}

export default { DEFAULT, COMPACT }
