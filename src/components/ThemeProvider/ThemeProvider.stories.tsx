import { action } from '@storybook/addon-actions'
import { object, withKnobs } from '@storybook/addon-knobs'
import React from 'react'

import Button from '../Button'
import ThemeProvider from './ThemeProvider'
import defaultTheme from '../../theme'

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
  decorators: [withKnobs]
}

const label = 'Theme'
const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    brand: {
      primary: defaultTheme.colors.red
    }
  }
}

export const SimpleTheme = () => (
  <ThemeProvider theme={object(label, theme)}>
    <p>
      Edite o valor <code>colors.brand.primary</code>
    </p>
    <Button onClick={action('clicked')} variantColor="brand.primary">
      Hello Button
    </Button>
  </ThemeProvider>
)
