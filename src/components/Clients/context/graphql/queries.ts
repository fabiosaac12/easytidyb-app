import gql from 'graphql-tag';

export const getClients = gql`
  query getClients($userId: ID!) {
    clients(userId: $userId) {
      _id
      name
      contact
      location
    }
  }
`;

export const addClient = gql`
  mutation addClient(
    $userId: ID!
    $name: String!
    $contact: String
    $location: String!
  ) {
    addClient(
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

export const updateClient = gql`
  mutation updateClient(
    $_id: ID!
    $name: String!
    $contact: String
    $location: String!
  ) {
    updateClient(
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

export const deleteClient = gql`
  mutation deleteClient($_id: ID!) {
    deleteClient(_id: $_id) {
      _id
      name
      contact
      location
    }
  }
`;
