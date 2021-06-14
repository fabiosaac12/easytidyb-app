import gql from 'graphql-tag';

export const getSales = gql`
  query getSales($userId: ID!) {
    sales(userId: $userId) {
      _id
      client {
        name
      }
      product {
        name
      }
    }
  }
`;
