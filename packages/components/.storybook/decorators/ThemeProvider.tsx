import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

export default story => (
  <ThemeProvider>
    <CSSReset />
    {story()}
  </ThemeProvider>
);
