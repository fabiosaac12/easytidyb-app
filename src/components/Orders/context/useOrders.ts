import { useContext } from 'react';
import { OrdersContext } from './OrdersContext';

export const useOrders = () => useContext(OrdersContext);
