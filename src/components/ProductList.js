import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          id={product.id}
          name={product.name}
          description={product.description}
          upvote={product.upvote}
        />
      ))}
    </ul>
  );
};

export default ProductList;
