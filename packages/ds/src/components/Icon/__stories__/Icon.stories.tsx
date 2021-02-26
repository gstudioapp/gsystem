import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Icon, IconProps } from '../Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    name: {
      defaultValue: 'question-outline',
    },
  },
} as Meta;

export const Default: Story<IconProps> = (args) => <Icon {...args} />;
