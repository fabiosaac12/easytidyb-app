import { gql } from '@apollo/client';

export const queries = {
  suppliers: gql`
    query getSuppliers($userId: ID!) {
      suppliers(userId: $userId) {
        _id
        name
        contact
        location
      }
    }
  `,
  orders: gql`
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
  `,
  products: gql`
    query getProducts($userId: ID!) {
      products(userId: $userId) {
        _id
        name
        char1
        char2
      }
    }
  `,
  clients: gql`
    query getClients($userId: ID!) {
      clients(userId: $userId) {
        _id
        name
        contact
        location
      }
    }
  `,
  sales: gql`
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
  `
};
