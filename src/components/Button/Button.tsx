import { ButtonProps, Button as ChakraButton } from '@chakra-ui/core'
import React, { FC } from 'react'

const Button: FC<ButtonProps> = (props) => <ChakraButton {...props} />

export default Button
