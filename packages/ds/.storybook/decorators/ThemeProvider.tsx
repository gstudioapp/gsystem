import * as React from 'react';
import { CSSReset } from "@chakra-ui/react";

import { ThemeProvider } from '../../src/components/ThemeProvider';

export default story => (
  <ThemeProvider>
    <CSSReset />
    {story()}
  </ThemeProvider>
);
