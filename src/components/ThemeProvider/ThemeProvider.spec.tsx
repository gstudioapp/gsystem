import { render } from '@testing-library/react'
import React from 'react'
import ThemeProvider from './ThemeProvider'

const setup = () =>
  render(
    <ThemeProvider>
      <div>Sou um teste</div>
    </ThemeProvider>
  )

describe('ThemeProvider component', () => {
  it('should be true', () => {
    const { getByText } = setup()
    expect(getByText('Sou um teste')).toBeInTheDocument()
  })
})
