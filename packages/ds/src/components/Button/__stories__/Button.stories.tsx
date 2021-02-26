import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InfoIcon } from '@chakra-ui/icons';

import { Button, ButtonProps } from '../Button';

export default {
  title: 'Forms/Button',
  component: Button,
  args: {
    onClick: (): void => {
      console.log('clicked me!!');
    },
  },
  argTypes: {
    size: {
      defaultValue: 'md',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    variant: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'destructive'],
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isFullWidth: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: 'string',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
} as ButtonProps;

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
} as ButtonProps;

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger Button',
} as ButtonProps;

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Primary Button',
  leftIcon: <InfoIcon />,
} as ButtonProps;
