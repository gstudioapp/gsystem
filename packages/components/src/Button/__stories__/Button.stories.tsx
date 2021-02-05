import React from 'react';

import { Button } from '../Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colorSchema: 'brand.primary',
  children: 'Primary Button',
};

export const Success = Template.bind({});
Success.args = {
  colorSchema: 'support.success',
  children: 'Success Button',
};

export const Facebook = Template.bind({});
Facebook.args = {
  colorSchema: 'facebook',
  children: 'Facebook Button',
};
