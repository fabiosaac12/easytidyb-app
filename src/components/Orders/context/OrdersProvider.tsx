import React from 'react';
import { useSection } from '../../../hooks/useSection';
import { useAuth } from '../../Auth';
import { Order } from '../models/Order';
import { OrderToAdd } from '../models/OrderToAdd';
import { OrderToUpdate } from '../models/OrderToUpdate';
import {
  addOrder,
  deleteOrder,
  getOrders,
  updateOrder,
} from './graphql/queries';
import { OrdersContext, OrdersContextProps } from './OrdersContext';

export const OrdersProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const { data, add, update, delete_ } = useSection<
    Order,
    OrderToAdd,
    OrderToUpdate
  >('orders', {
    getQuery: getOrders,
    addQuery: addOrder,
    updateQuery: updateOrder,
    deleteQuery: deleteOrder,
  });

  const contextValue: OrdersContextProps = {
    data,
    add: (order) =>
      user?._id && add({ variables: { userId: user._id, ...order } }),
    update: (order) => user?._id && update({ variables: order }),
    delete: (orderId) => user?._id && delete_({ variables: { _id: orderId } }),
  };

  return (
    <OrdersContext.Provider value={contextValue}>
      {children}
    </OrdersContext.Provider>
  );
};
