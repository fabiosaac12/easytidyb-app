import { createContext } from 'react';
import { Order } from '../models/Order';
import { OrderToAdd } from '../models/OrderToAdd';
import { OrderToUpdate } from '../models/OrderToUpdate';

export interface OrdersContextProps {
  data?: Order[];
  add: (supplier: OrderToAdd) => void;
  update: (supplier: OrderToUpdate) => void;
  delete: (supplierId: string) => void;
}

export const OrdersContext = createContext<OrdersContextProps>(
  {} as OrdersContextProps,
);
