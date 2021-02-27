import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Text, TextProps } from '../Text';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    children: {
      defaultValue: 'Example text',
      control: {
        type: 'text',
      },
    },
    variant: {
      defaultValue: 'body-1',
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

export const Default: Story<TextProps> = (args) => <Text {...args} />;
