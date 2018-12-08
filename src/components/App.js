import React from 'react';
import { Query } from 'react-apollo';
import { GET_PRODUCTS } from './Products/products';
import ProductList from './ProductList';

const App = () => (
  <Query query={GET_PRODUCTS}>
    {({ data: { products }, loading }) => {
      if (loading) {
        return <div>Loading...</div>;
      }

      return <ProductList products={products} />;
    }}
  </Query>
);

export default App;
