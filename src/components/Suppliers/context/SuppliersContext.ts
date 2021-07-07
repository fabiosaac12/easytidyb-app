import { createContext } from 'react';
import { Supplier } from '../models/Supplier';
import { SupplierToAdd } from '../models/SupplierToAdd';

export interface SuppliersContextProps {
  data?: Supplier[];
  add: (supplier: SupplierToAdd) => void;
  update: (supplier: Supplier) => void;
  delete: (supplierId: string) => void;
}

export const SuppliersContext = createContext<SuppliersContextProps>(
  {} as SuppliersContextProps,
);
