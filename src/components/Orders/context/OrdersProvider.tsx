import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Auth';
import { Order } from '../models/Order';
import { getOrders } from './graphql/queries';
import { OrdersContext, OrdersContextProps } from './OrdersContext'

export const OrdersProvider: React.FC = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>();

  const { user } = useAuth();

  const { data, loading, error } = useQuery(getOrders, {
    variables: { userId: user?._id }
  });

  useEffect(() => {
    setOrders(data?.orders);
  }, [data])

  const contextValue: OrdersContextProps = {
    data: orders
  }

  return (
    <OrdersContext.Provider value={contextValue}>
      {children}
    </OrdersContext.Provider>
  )
}