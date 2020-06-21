import React from 'react';
import { addDecorator } from '@storybook/react';

import StoryBookWrapper from './utils/StoryBookWrapper';

addDecorator(storyFn => <StoryBookWrapper>{storyFn()}</StoryBookWrapper>);
