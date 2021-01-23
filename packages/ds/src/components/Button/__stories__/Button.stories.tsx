import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, Props } from '../Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    size: 'md',
    children: 'Click me!',
    onClick: (): void => {
      console.log('clicked me!!');
    },
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'destructive', 'outline'],
      },
    },
    children: { control: 'string' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
} as Props;

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
} as Props;

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  variant: 'outline',
} as Props;

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
} as Props;
