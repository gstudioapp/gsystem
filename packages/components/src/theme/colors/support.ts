import { ColorHues, Support } from './types';

const danger: ColorHues = {
  50: '#ffecec',
  100: '#ffd8d8',
  200: '#ffb1b1',
  300: '#ff8a8a',
  400: '#ff6363',
  500: '#ff3c3c',
  600: '#cc3030',
  700: '#992424',
  800: '#661818',
  900: '#330c0c',
};

const info: ColorHues = {
  50: '#e6f2ff',
  100: '#cce4ff',
  200: '#99c9ff',
  300: '#66afff',
  400: '#3394ff',
  500: '#0079ff',
  600: '#0061cc',
  700: '#004999',
  800: '#003066',
  900: '#001833',
};

const success: ColorHues = {
  50: '#e7faf0',
  100: '#d0f5e0',
  200: '#a1ebc2',
  300: '#71e2a3',
  400: '#42d885',
  500: '#13CE66',
  600: '#0fa552',
  700: '#0b7c3d',
  800: '#085229',
  900: '#042914',
};

const warning: ColorHues = {
  50: '#fff6e7',
  100: '#ffeed0',
  200: '#ffdca1',
  300: '#ffcb71',
  400: '#ffb942',
  500: '#ffa813',
  600: '#cc860f',
  700: '#99650b',
  800: '#664308',
  900: '#332204',
};

const support: Support = {
  danger,
  info,
  success,
  warning,
};

export default support;
