import { ThemeProvider} from '@chakra-ui/core'
import { render } from '@testing-library/react'
import React from 'react'

import List from './List'
import theme from '../../theme'

const setup = () =>
  render(
    <ThemeProvider theme={theme}>
      <List />
    </ThemeProvider>
  )

describe('List component', () => {
  it('should be true', function () {
    const { getByText } = setup()
    expect(getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument()
  })
})
