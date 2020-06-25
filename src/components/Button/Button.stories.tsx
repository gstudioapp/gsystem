import { action } from '@storybook/addon-actions'
import React from 'react'

import Button from './Button'

import { text, withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
}

const label = 'Color'
const defaultValue = 'brand.primary'

export const Text = () => (
  <Button onClick={action('clicked')} variantColor={text(label, defaultValue)}>
    Hello Button
  </Button>
)

export const Emoji = () => (
  <Button
    onClick={action('clicked')}
    variantColor={text(label, defaultValue)}
    variant="solid"
  >
    <span role="img" aria-label="so cool">
      😎
    </span>
    Click me
  </Button>
)
