import React, { FC } from 'react'
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/core'

const Button: FC<ButtonProps> = (props) => <ChakraButton {...props} />

export default Button
