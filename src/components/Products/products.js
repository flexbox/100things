import gql from 'graphql-tag';

export const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  {
    products {
      id
      name
      description
      upvote
    }
  }
`;
