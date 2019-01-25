import React from 'react'
import { Heading, Flex } from 'rebass'

const Header = () => {
  return (
    <Flex justifyContent="center" p={2} as="header" bg="white" mb={5}>
      <Heading>
        <span role="img" aria-label="backpack">
          🎒
        </span>{' '}
        My 100 Things
      </Heading>
    </Flex>
  )
}

export default Header
