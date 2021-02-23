import React from 'react';
import { Meta, Story } from '@storybook/react';

import { MenuSelect, MenuSelectProps } from '../MenuSelect';

export default {
  title: 'Atoms/MenuSelect',
  component: MenuSelect,
  args: {
    options: [
      {
        label: 'Option 1',
        value: 'foo',
      },
      {
        label: 'Option 2',
        value: 'foo',
      },
      {
        label: 'Option 3',
        value: 'foo',
      },
    ],
    onChange: (option) => console.log(option),
  },
  argTypes: {
    placeholder: {
      defaultValue: 'Choose an option',
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

export const Default: Story<MenuSelectProps> = (args) => <MenuSelect {...args} />;
