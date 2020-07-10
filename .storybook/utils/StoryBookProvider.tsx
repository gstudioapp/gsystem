import { useDarkMode } from 'storybook-dark-mode'
import React, { FC } from 'react'

import {
  CSSReset,
  ColorModeProvider,
  ThemeProvider
} from '../../src/components'
import customTheme from '../../src/theme/theme'

const StoryBookProvider: FC = ({ children }) => (
  <ThemeProvider theme={customTheme}>
    <ColorModeProvider value={useDarkMode() ? 'dark' : 'light'}>
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ThemeProvider>
)

export default StoryBookProvider
