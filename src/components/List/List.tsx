import { List as ChakraList, ListItem } from '@chakra-ui/core'
import React from 'react'

const List = () => (
  <ChakraList as="ol" styleType="decimal">
    <ListItem>Lorem ipsum dolor sit amet</ListItem>
    <ListItem>Consectetur adipiscing elit</ListItem>
    <ListItem>Integer molestie lorem at massa</ListItem>
    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
  </ChakraList>
)

export default List;
