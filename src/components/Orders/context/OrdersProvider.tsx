import React from 'react';
import { useSection } from '../../../hooks/useSection';
import { Order } from '../models/Order';
import { getOrders } from './graphql/queries';
import { OrdersContext, OrdersContextProps } from './OrdersContext';

export const OrdersProvider: React.FC = ({ children }) => {
  const [orders, setOrders] = useSection<Order>('orders', getOrders);

  const contextValue: OrdersContextProps = {
    data: orders,
  };

  return (
    <OrdersContext.Provider value={contextValue}>
      {children}
    </OrdersContext.Provider>
  );
};
