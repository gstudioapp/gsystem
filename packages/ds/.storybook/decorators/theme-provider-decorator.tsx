import * as React from 'react';
import { CSSReset } from '@chakra-ui/react';
import { DecoratorFn } from '@storybook/react';

import { ThemeProvider } from '../../src/components/ThemeProvider';

export const ThemeProviderDecorator: DecoratorFn = (StoryFn) => (
  <ThemeProvider>
    <CSSReset />
    {StoryFn()}
  </ThemeProvider>
);
