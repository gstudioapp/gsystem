import { action } from '@storybook/addon-actions'
import React from 'react'

import Button from '../Button'
import ThemeProvider from './ThemeProvider'
import defaultTheme from '../../theme'

export default {
  title: 'ThemeProvider',
  component: ThemeProvider
}

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    brand: {
      primary: {
        500: 'red'
      }
    }
  }
}

export const SimpleTheme = () => (
  <ThemeProvider theme={theme}>
    <h1>Sou apenas um teste</h1>
    <Button onClick={action('clicked')} variantColor="brand.primary">
      Hello Button
    </Button>
  </ThemeProvider>
)
