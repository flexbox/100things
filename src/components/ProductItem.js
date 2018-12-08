import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const UPVOTE_PRODUCT = gql`
  mutation UpvoteProduct($vote: Int!, $id: ID!) {
    updateProduct(data: { upvote: $vote }, where: { id: $id }) {
      id
      name
    }
  }
`;

const ProductItem = product => {
  return (
    <li>
      <Mutation mutation={UPVOTE_PRODUCT}>
        {(upvoteProduct, { data }) => (
          <div>
            <h2>
              {product.name} <small>{product.id}</small>
            </h2>
            <p>
              {product.description} • {product.upvote}
            </p>
            <form
              onSubmit={e => {
                e.preventDefault();
                upvoteProduct({
                  variables: { id: product.id, vote: product.upvote + 1 }
                });
                product.refetch();
                console.log(product.id);
                console.log(product.upvote);
              }}
            >
              <button type="submit">
                <span role="img" aria-label="upvote">
                  👍
                </span>
                Upvote
              </button>
            </form>
          </div>
        )}
      </Mutation>
    </li>
  );
};

export default ProductItem;
