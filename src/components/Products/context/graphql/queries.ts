import gql from 'graphql-tag';

export const getProducts = gql`
  query getProducts($userId: ID!) {
    products(userId: $userId) {
      _id
      order {
        _id
      }
      name
      char1
      char2
      initialStock
      retailPrice
      wholesalePrice
      purchasePrice
    }
  }
`;

export const addProduct = gql`
  mutation addProduct(
    $userId: ID!
    $orderId: ID!
    $name: String!
    $char1: String!
    $char2: String!
    $initialStock: Int!
    $retailPrice: Float!
    $wholesalePrice: Float!
    $purchasePrice: Float!
  ) {
    addProduct(
      userId: $userId
      orderId: $orderId
      name: $name
      char1: $char1
      char2: $char2
      initialStock: $initialStock
      retailPrice: $retailPrice
      wholesalePrice: $wholesalePrice
      purchasePrice: $purchasePrice
    ) {
      _id
      order {
        _id
      }
      name
      char1
      char2
      initialStock
      retailPrice
      wholesalePrice
      purchasePrice
    }
  }
`;

export const updateProduct = gql`
  mutation updateProduct(
    $_id: ID!
    $orderId: ID!
    $name: String!
    $char1: String!
    $char2: String!
    $initialStock: Int!
    $retailPrice: Float!
    $wholesalePrice: Float!
    $purchasePrice: Float!
  ) {
    updateProduct(
      _id: $_id
      orderId: $orderId
      name: $name
      char1: $char1
      char2: $char2
      initialStock: $initialStock
      retailPrice: $retailPrice
      wholesalePrice: $wholesalePrice
      purchasePrice: $purchasePrice
    ) {
      _id
      order {
        _id
      }
      name
      char1
      char2
      initialStock
      retailPrice
      wholesalePrice
      purchasePrice
    }
  }
`;

export const deleteProduct = gql`
  mutation deleteProduct($_id: ID!) {
    deleteProduct(_id: $_id) {
      _id
      order {
        _id
      }
      name
      char1
      char2
      initialStock
      retailPrice
      wholesalePrice
      purchasePrice
    }
  }
`;
