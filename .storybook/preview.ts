import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';

import StoryBookWrapper from './utils/StoryBookWrapper'

addDecorator(withInfo)
addDecorator(StoryBookWrapper);

addParameters({
  info: {
    inline: true,
    styles: {
      infoBody: {
        backgroundColor: 'transparent',
        color: 'inherit'
      }
    }
  }
})
