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
  variantColor: 'brand.primary',
  children: 'Primary Button',
};

export const Success = Template.bind({});
Success.args = {
  variantColor: 'support.success',
  children: 'Success Button',
};

export const Facebook = Template.bind({});
Facebook.args = {
  variantColor: 'facebook',
  children: 'Facebook Button',
};
