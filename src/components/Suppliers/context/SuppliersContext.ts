import { createContext } from 'react';
import { Supplier } from '../models/Supplier';

export interface SuppliersContextProps {
  data?: Supplier[]
}

export const SuppliersContext = createContext<SuppliersContextProps>({} as SuppliersContextProps);