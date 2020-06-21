import { ThemeProvider } from '@chakra-ui/core'
import { render } from '@testing-library/react'
import React from 'react'

import Button from './Button'
import theme from '../../theme'

const initialProps = {
  children: 'Click me'
}

const setup = () =>
  render(
    <ThemeProvider theme={theme}>
      <Button {...initialProps} />
    </ThemeProvider>
  )

describe('Button component', () => {
  it('should be true', function () {
    const { getByText } = setup()
    expect(getByText(initialProps.children)).toBeInTheDocument()
  })
})
