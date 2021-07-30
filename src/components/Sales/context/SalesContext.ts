import { createContext } from 'react';
import { Sale } from '../models/Sale';
import { SaleToAdd } from '../models/SaleToAdd';
import { SaleToUpdate } from '../models/SaleToUpdate';

export interface SalesContextProps {
  data?: Sale[];
  add: (sale: SaleToAdd) => void;
  update: (sale: SaleToUpdate) => void;
  delete: (saleId: string) => void;
}

export const SalesContext = createContext<SalesContextProps>(
  {} as SalesContextProps,
);
