import gql from 'graphql-tag';

export const getOrders = gql`
  query getOrders($userId: ID!) {
    orders(userId: $userId) {
      _id
      supplier {
        _id
        name
      }
      date
      expectedObtained
    }
  }
`;

export const addOrder = gql`
  mutation addOrder(
    $userId: ID!
    $supplierId: ID!
    $expectedObtained: Int!
    $date: Long!
  ) {
    addOrder(
      userId: $userId
      supplierId: $supplierId
      expectedObtained: $expectedObtained
      date: $date
    ) {
      _id
      supplier {
        _id
        name
      }
      date
      expectedObtained
    }
  }
`;

export const updateOrder = gql`
  mutation updateOrder(
    $_id: ID!
    $supplierId: ID!
    $expectedObtained: Int!
    $date: Long!
  ) {
    updateOrder(
      _id: $_id
      supplierId: $supplierId
      expectedObtained: $expectedObtained
      date: $date
    ) {
      _id
      supplier {
        _id
        name
      }
      date
      expectedObtained
    }
  }
`;

export const deleteOrder = gql`
  mutation deleteOrder($_id: ID!) {
    deleteOrder(_id: $_id) {
      _id
      supplier {
        _id
        name
      }
      date
      expectedObtained
    }
  }
`;
