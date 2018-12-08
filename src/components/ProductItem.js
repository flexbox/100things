import React from 'react';

const ProductItem = data => {
  const _handleClick = id => {
    console.log('====================================');
    console.log(id);
    console.log('====================================');
  };

  return (
    <li>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      {data.upvote}
      <button onClick={() => _handleClick(data.id)}>
        <span role="img" aria-label="upvote">
          👍
        </span>
        Upvote
      </button>
    </li>
  );
};

export default ProductItem;
