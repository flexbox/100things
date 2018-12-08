import React from 'react';
import { Query } from 'react-apollo';
import { GET_PRODUCTS } from './Products/products';
import ProductList from './ProductList';
import { Text, Flex } from 'rebass';

const App = () => (
  <Query query={GET_PRODUCTS}>
    {({ data: { products }, loading, refetch }) => {
      if (loading) {
        return (
          <Flex alignItems="center" justifyContent="center" className="loading">
            <Text fontSize={[2, 4]} color="#B1BDC0">
              ⏳ Loading...
            </Text>
          </Flex>
        );
      }

      return <ProductList products={products} refetch={refetch} />;
    }}
  </Query>
);

export default App;
