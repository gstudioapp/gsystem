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
    size: {
      defaultValue: 'sm',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<MenuSelectProps> = (args) => <MenuSelect {...args} />;

export const Default = Template.bind({});
Default.args = {} as MenuSelectProps;

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  value: {
    label: 'Option 3',
    value: 'foo',
  },
} as MenuSelectProps;

export const WithEmptyStateMessage = Template.bind({});
WithEmptyStateMessage.args = {
  options: [],
} as MenuSelectProps;
