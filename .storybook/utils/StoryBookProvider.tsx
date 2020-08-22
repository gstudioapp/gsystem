import { useDarkMode } from 'storybook-dark-mode'
import React, { FC } from 'react'

import {
  CSSReset,
  ColorModeProvider,
  ThemeProvider
} from '../../src/components'
import { Density } from '../../src/theme/space'
import customTheme from '../../src/theme/theme'

const StoryBookProvider: FC = ({ children }) => (
  <ThemeProvider theme={customTheme(Density.DEFAULT)}>
    <ColorModeProvider value={useDarkMode() ? 'dark' : 'light'}>
      <CSSReset />
      {children}
    </ColorModeProvider>
  </ThemeProvider>
)

export default StoryBookProvider
