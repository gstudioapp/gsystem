import React from 'react'

import List from './List'

import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'List',
  component: List,
  decorators: [withKnobs]
}

export const Default = () => (
  <List />
)
