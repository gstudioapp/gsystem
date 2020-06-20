import React, { FC } from 'react'
import { ThemeProvider, CSSReset, Icon } from '@chakra-ui/core'
import customTheme from './theme'

const App: FC = () => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <div>
      <header>
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
            Learn React <Icon name="search" color="brand.primary" />
        </a>
      </header>
    </div>
  </ThemeProvider>
)

export default App
