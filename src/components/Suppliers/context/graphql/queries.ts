import gql from 'graphql-tag';

export const getSuppliers = gql`
  query getSuppliers($userId: ID!) {
    suppliers(userId: $userId) {
      _id
      name
      contact
      location
    }
  }
`;

export const addSupplier = gql`
  mutation addSupplier(
    $userId: ID!
    $name: String!
    $contact: String
    $location: String!
  ) {
    addSupplier(
      userId: $userId
      name: $name
      contact: $contact
      location: $location
    ) {
      _id
      name
      contact
      location
    }
  }
`;

export const updateSupplier = gql`
  mutation updateSupplier(
    $_id: ID!
    $name: String!
    $contact: String
    $location: String!
  ) {
    updateSupplier(
      _id: $_id
      name: $name
      contact: $contact
      location: $location
    ) {
      _id
      name
      contact
      location
    }
  }
`;
