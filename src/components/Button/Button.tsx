import { Button as ChakraButton, ButtonProps as Props } from '@chakra-ui/core'
import React, { FC } from 'react'

import { Colors } from '../../theme/colors/colors'

export type ButtonProps = Exclude<Props, 'variantColor'> & {
  variantColor: Colors
}

const Button: FC<ButtonProps> = (props) => <ChakraButton {...props} />

export default Button
