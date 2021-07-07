import { createContext } from 'react';
import { Supplier } from '../models/Supplier';
import { SupplierToAdd } from '../models/SupplierToAdd';

export interface SuppliersContextProps {
  data?: Supplier[];
  add: (supplier: SupplierToAdd) => void;
}

export const SuppliersContext = createContext<SuppliersContextProps>(
  {} as SuppliersContextProps,
);
