import gql from "graphql-tag";

export const getClients = gql`
query getClients($userId: ID!) {
  clients(userId: $userId) {
    _id
    name
    contact
    location
  }
}
`