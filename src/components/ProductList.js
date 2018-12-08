import React from 'react';
import ProductItem from './ProductItem';
import { Box, Heading, Text, Flex, Button } from 'rebass';

const ProductList = ({ products, refetch }) => {
  return (
    <div>
      <Flex justifyContent="center" p={2}>
        <Heading>🎒 My 100 Things </Heading>
      </Flex>
      {products.map((product, index) => (
        <ProductItem
          refetch={refetch}
          key={index}
          id={product.id}
          name={product.name}
          description={product.description}
          upvote={product.upvote}
        />
      ))}
    </div>
  );
};

export default ProductList;
