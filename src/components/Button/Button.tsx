import {
  Button as ChakraButton,
  ButtonProps as Props,
  VariantColor
} from '@chakra-ui/core'
import React, { FC } from 'react'

import { Colors } from '../../theme/colors/colors'
import { Sizes } from '../../theme/space'
import { useDensity } from '../ThemeProvider'

export type ButtonProps = Omit<Props, 'variantColor'> & {
  variantColor: Colors
}

const Button: FC<ButtonProps> = (props) => {
  const styles = useDensity('button', props.size as Sizes)
  return <ChakraButton {...props} {...styles} />
}

export default Button
