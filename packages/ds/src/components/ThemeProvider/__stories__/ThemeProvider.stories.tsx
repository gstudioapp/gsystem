import React from 'react';

import { ThemeProvider } from '../ThemeProvider';

export default {
  title: 'Theming/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    theme: { colors: { primary: 'red' } },
  },
};

const Template = (args) => <ThemeProvider {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  variantColor: 'red',
  children: <div>Hello</div>,
};
