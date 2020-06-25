import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StoryBookWrapper from './utils/StoryBookWrapper';

addDecorator(withInfo);
addDecorator(storyFn => <StoryBookWrapper>{storyFn()}</StoryBookWrapper>);

addParameters({
  info: { inline: true, styles: {
      infoBody: {
        backgroundColor: 'transparent',
        color: 'inherit',
      }
    }
  }
});
