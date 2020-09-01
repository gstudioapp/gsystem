import { theme as chakraTheme } from '@chakra-ui/core';

import { ColorsType } from './types';
import brand from './brand';
import support from './support';

const colors: ColorsType = {
  ...chakraTheme.colors,
  brand,
  support,
};

export default colors;
