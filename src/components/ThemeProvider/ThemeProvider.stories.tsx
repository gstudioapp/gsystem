import { Badge, Box, Flex, Grid, Image, Text } from '@chakra-ui/core'
import { action } from '@storybook/addon-actions'
import { object, withKnobs } from '@storybook/addon-knobs'
import React from 'react'

import Button from '../Button'
import ThemeProvider from './ThemeProvider'
import defaultTheme from '../../theme'

export default {
  title: 'ThemeProvider',
  component: ThemeProvider,
  decorators: [withKnobs]
}

const label = 'Theme'
const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors
    // brand: {
    //   primary: defaultTheme.colors.teal
    // }
  }
}

export const SimpleTheme = () => (
  <ThemeProvider theme={object(label, theme)}>
    <p>
      Edite o valor <code>colors.brand.primary</code>
    </p>
    <Button onClick={action('clicked')} variantColor="brand.primary">
      Hello Button
    </Button>
  </ThemeProvider>
)

export const Card = () => (
  <ThemeProvider theme={theme}>
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <Box>
        <Image rounded="md" src="https://bit.ly/2k1H1t6" />
        <Flex align="baseline" mt={2}>
          <Badge variantColor="brand.primary">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="brand.primary.500"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text>
        <Text mt={2}>$119/night</Text>
        <Flex mt={2} align="center">
          <Box color="orange.400">★</Box>
          <Text ml={1}>
            <b>4.84</b> (190)
          </Text>
        </Flex>
        <Button variantColor="brand.primary">CTA</Button>
      </Box>
    </Grid>
  </ThemeProvider>
)
