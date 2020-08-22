import { render } from '@testing-library/react'
import React from 'react'

import Button, { ButtonProps } from './Button'
import ThemeProvider from '../ThemeProvider'
import theme from '../../theme'

const initialProps: ButtonProps = {
  children: 'Click me',
  variantColor: 'red'
}

const setup = () =>
  render(
    <ThemeProvider theme={theme()}>
      <Button {...initialProps}>{initialProps.children}</Button>
    </ThemeProvider>
  )

describe('Button component', () => {
  it('should be true', function () {
    const { getByText } = setup()
    expect(getByText(initialProps.children)).toBeInTheDocument()
  })
})
