import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Logo, LogoProps } from '../Logo';

export default {
  title: 'Media/Logo',
  component: Logo,
  argTypes: {
    type: {
      defaultValue: 'normal',
      control: {
        type: 'select',
        options: ['normal', 'minimal'],
      },
    },
  },
} as Meta;

export const Default: Story<LogoProps> = (args) => <Logo {...args} />;
