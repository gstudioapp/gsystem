import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'

import { selectVariant, selectVariantColor } from '../../utils/knobs'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
}

export const Text = () => (
  <Button
    onClick={action('clicked')}
    variant={selectVariant('Variant')}
    variantColor={selectVariantColor('Color')}
  >
    {text('Label', 'Button')}
  </Button>
)

export const Example = () => (
  <Button variantColor="support.warning">Example</Button>
)
