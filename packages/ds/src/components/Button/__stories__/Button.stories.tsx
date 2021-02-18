import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from '../Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
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
    children: {
      control: 'string',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
} as ButtonProps;

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  variant: 'outline',
  size: 'sm',
  children: "I'm small",
} as ButtonProps;

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  size: 'lg',
  children: "I'm big",
} as ButtonProps;
