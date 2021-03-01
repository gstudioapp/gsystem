import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Heading, HeadingProps } from '../Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {
    children: {
      defaultValue: 'Example text',
      control: {
        type: 'text',
      },
    },
    variant: {
      defaultValue: 'subtitle',
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;
