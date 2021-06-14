import gql from "graphql-tag";

export const getOrders = gql`
  query getOrders($userId: ID!) {
    orders(userId: $userId) {
      _id
      supplier {
        name
      }
      date
      expectedObtained
    }
  }
`