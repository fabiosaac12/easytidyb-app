import { createContext } from 'react';
import { Order } from '../models/Order';

export interface OrdersContextProps {
  data?: Order[];
}

export const OrdersContext = createContext<OrdersContextProps>(
  {} as OrdersContextProps,
);
