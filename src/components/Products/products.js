import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
  {
    products(orderBy: upvote_DESC) {
      id
      name
      description
      upvote
    }
  }
`;
