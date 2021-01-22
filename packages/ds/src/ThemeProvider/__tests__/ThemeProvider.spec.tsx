import '@testing-library/jest-dom';
import React from 'react';

import { setup } from '../../test-utils';

import { ThemeProvider } from '../ThemeProvider';

const Component = () => (
  <ThemeProvider>
    <div>Hello world!</div>
  </ThemeProvider>
);

describe('ThemeProvider', () => {
  it('should render correctly', () => {
    const { getByText } = setup(Component)();
    expect(getByText('Hello world!')).toBeInTheDocument();
  });
});
