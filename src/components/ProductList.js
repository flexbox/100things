import React from 'react';

const productList = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product.name}</li>
      ))}
    </ul>
  );
};

export default productList;
