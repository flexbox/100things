import React from 'react';
import { Query } from 'react-apollo';
import { GET_REPOSITORIES_OF_ORGANIZATION } from './Products/products';
import ProductList from './ProductList';

const App = () => (
  <Query query={GET_REPOSITORIES_OF_ORGANIZATION}>
    {({ data: { products }, loading }) => {
      if (loading) {
        return <div>Loading...</div>;
      }

      return <ProductList products={products} />;
    }}
  </Query>
);

export default App;
