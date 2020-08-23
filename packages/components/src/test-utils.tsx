/* eslint-disable */
import React, { FC } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';

const Wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

export function createWrapper<T extends FC>(Component: T) {
  return (props) => (
    <Wrapper>
      <Component {...props} />
    </Wrapper>
  );
}

export const setup = (Component) => (props = {}): RenderResult => {
  return render(
    <Wrapper>
      <Component {...props} />
    </Wrapper>,
  );
};
