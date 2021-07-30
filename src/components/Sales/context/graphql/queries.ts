import gql from 'graphql-tag';

export const getSales = gql`
  query getSales($userId: ID!) {
    sales(userId: $userId) {
      _id
      client {
        _id
        name
      }
      product {
        _id
        name
      }
      quantity
      obtained
      profit
      discount
      date
      type
    }
  }
`;

export const addSale = gql`
  mutation addSale(
    $userId: ID!
    $productId: ID!
    $clientId: ID!
    $quantity: Int!
    $obtained: Int!
    $profit: Int!
    $discount: Int!
    $date: Long!
    $type: String!
  ) {
    addSale(
      userId: $userId
      productId: $productId
      clientId: $clientId
      quantity: $quantity
      obtained: $obtained
      profit: $profit
      discount: $discount
      date: $date
      type: $type
    ) {
      _id
      client {
        _id
        name
      }
      product {
        _id
        name
      }
      quantity
      obtained
      profit
      discount
      date
      type
    }
  }
`;

export const updateSale = gql`
  mutation updateSale(
    $_id: ID!
    $productId: ID!
    $clientId: ID!
    $quantity: Int!
    $obtained: Int!
    $profit: Int!
    $discount: Int!
    $date: Long!
    $type: String!
  ) {
    updateSale(
      _id: $_id
      productId: $productId
      clientId: $clientId
      quantity: $quantity
      obtained: $obtained
      profit: $profit
      discount: $discount
      date: $date
      type: $type
    ) {
      _id
      client {
        _id
        name
      }
      product {
        _id
        name
      }
      quantity
      obtained
      profit
      discount
      date
      type
    }
  }
`;

export const deleteSale = gql`
  mutation deleteSale($_id: ID!) {
    deleteSale(_id: $_id) {
      _id
      client {
        _id
        name
      }
      product {
        _id
        name
      }
      quantity
      obtained
      profit
      discount
      date
      type
    }
  }
`;
