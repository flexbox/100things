import React from 'react';
import { Query } from 'react-apollo';
import { GET_PRODUCTS } from './Products/products';
import ProductList from './ProductList';

const App = () => (
  <Query query={GET_PRODUCTS}>
    {({ data: { products }, loading, refetch }) => {
      if (loading) {
        return <div>⏳ Loading...</div>;
      }

      return <ProductList products={products} refetch={refetch} />;
    }}
  </Query>
);

export default App;
