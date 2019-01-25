import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ProductList from './ProductList'
import { Text, Flex } from 'rebass'
import Header from './Header'

const GET_PRODUCTS = gql`
  {
    products(orderBy: upvote_DESC) {
      id
      name
      description
      upvote
    }
  }
`

const App = () => (
  <>
    <Header />
    <Query query={GET_PRODUCTS}>
      {({ data: { products }, loading, refetch }) => {
        if (loading) {
          return (
            <Flex
              alignItems="center"
              justifyContent="center"
              className="loading"
            >
              <Text fontSize={[2, 4]} color="#B1BDC0">
                <span role="img" aria-label="loading">
                  ⏳
                </span>
                Loading…
              </Text>
            </Flex>
          )
        }

        return <ProductList products={products} refetch={refetch} />
      }}
    </Query>
  </>
)

export default App
