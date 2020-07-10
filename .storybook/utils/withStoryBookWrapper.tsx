import { DecoratorFunction } from '@storybook/addons'
import React, { ReactElement } from 'react'

import StoryBookProvider from './StoryBookProvider'

const withStoryBookWrapper: DecoratorFunction<ReactElement> = (
  StoryFn,
  ctx?
) => (
  <StoryBookProvider>
    <StoryFn {...ctx} />
  </StoryBookProvider>
)

export default withStoryBookWrapper
