import React from 'react';

import { ThemeProvider } from '../ThemeProvider';

export default {
  title: 'Example/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    theme: { colors: { primary: 'red' } },
  },
};

const Template = (args) => <ThemeProvider {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  colorScheme: 'red',
  children: <div>Hello</div>,
};
