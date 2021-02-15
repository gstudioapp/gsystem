import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Input, InputProps } from '../Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {} as InputProps;
