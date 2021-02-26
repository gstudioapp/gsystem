import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Card, CardProps } from '../Card';

export default {
  title: 'Display/Card',
  component: Card,
} as Meta;

export const Default: Story<CardProps> = (args) => <Card {...args} />;
