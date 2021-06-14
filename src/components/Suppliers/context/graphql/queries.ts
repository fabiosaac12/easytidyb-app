import gql from "graphql-tag";

export const getSuppliers = gql`
  query getSuppliers($userId: ID!) {
    suppliers(userId: $userId) {
      _id
      name
      contact
      location
    }
  }
`