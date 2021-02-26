import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Card, CardProps } from '../Card';

export default {
  title: 'Display/Card',
  component: Card,
  argTypes: {
    boxShadow: {
      defaultValue: 'base',
      control: {
        type: 'select',
        options: ['base', 'medium', 'large', 'primary', 'none'],
      },
    },
    size: {
      defaultValue: 'md',
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

export const Default: Story<CardProps> = (args) => <Card {...args}>Example Content</Card>;
