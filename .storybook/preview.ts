import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import withStoryBookWrapper from './utils/withStoryBookWrapper'

addDecorator(withInfo)
addDecorator(withStoryBookWrapper)

addParameters({
  info: {
    styles: {
      infoBody: {
        backgroundColor: 'transparent',
        color: 'inherit'
      }
    }
  },
  darkMode: {
    stylePreview: true
  }
})
