import gql from "graphql-tag";

export const getProducts = gql`
query getProducts($userId: ID!) {
  products(userId: $userId) {
    _id
    name
    char1
    char2
  }
}
`