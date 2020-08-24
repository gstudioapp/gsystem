import * as React from 'react';
import { CSSReset } from '@chakra-ui/core';

import { ThemeProvider } from '../../src/ThemeProvider';

export default story => (
  <ThemeProvider>
    <CSSReset />
    {story()}
  </ThemeProvider>
);
