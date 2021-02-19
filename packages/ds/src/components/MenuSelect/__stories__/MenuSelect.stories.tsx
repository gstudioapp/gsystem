import React from 'react';
import { Meta, Story } from '@storybook/react';

import { MenuSelect, MenuSelectProps } from '../MenuSelect';

export default {
  title: 'Atoms/MenuSelect',
  component: MenuSelect,
  argTypes: {},
} as Meta;

export const Default: Story<MenuSelectProps> = (args) => <MenuSelect {...args} />;
