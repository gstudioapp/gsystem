import { action } from '@storybook/addon-actions'
import React from 'react'

import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
)

export const Emoji = () => (
  <Button onClick={action('clicked')} variantColor="teal" variant="solid">
    <span role="img" aria-label="so cool">
      😎
    </span>
    Click me
  </Button>
)
