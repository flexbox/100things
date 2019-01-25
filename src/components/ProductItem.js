import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Box, Heading, Text, Flex, Button } from 'rebass'

const UPVOTE_PRODUCT = gql`
  mutation UpvoteProduct($vote: Int!, $id: ID!) {
    updateProduct(data: { upvote: $vote }, where: { id: $id }) {
      id
      name
    }
  }
`

const ProductItem = product => {
  return (
    <Box>
      <Mutation mutation={UPVOTE_PRODUCT}>
        {(upvoteProduct, { data }) => (
          <Flex
            flexDirection="row"
            alignItems="center"
            flexWrap="wrap"
            p={3}
            bg="white"
            mb={5}
            ml={4}
            mr={4}
          >
            <Box p={3} width={[1, 4 / 12]}>
              <Heading fontSize={[4, 6]} color="#E354C2" textAlign="center">
                {product.upvote}
              </Heading>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  upvoteProduct({
                    variables: { id: product.id, vote: product.upvote + 1 }
                  })
                  product.refetch()
                }}
              >
                <Button type="submit" bg="#D7DDDE" color="#111111">
                  <span role="img" aria-label="upvote">
                    👍
                  </span>{' '}
                  <br />
                  Upvote
                </Button>
              </form>
              <form
                onSubmit={e => {
                  e.preventDefault()
                  upvoteProduct({
                    variables: { id: product.id, vote: product.upvote - 1 }
                  })
                  product.refetch()
                }}
              >
                <Button type="submit" bg="#D7DDDE" color="#111111">
                  <span role="img" aria-label="upvote">
                    👎
                  </span>{' '}
                  <br />
                  Downvote
                </Button>
              </form>
            </Box>
            <Box p={3} width={[1, 8 / 12]}>
              <Heading fontSize={[4, 6]}>{product.name}</Heading>
              <Text fontSize={[2, 4]}>{product.description}</Text>
            </Box>
          </Flex>
        )}
      </Mutation>
    </Box>
  )
}

export default ProductItem
