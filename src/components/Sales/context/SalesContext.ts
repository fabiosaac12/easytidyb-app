import { createContext } from 'react';
import { Sale } from '../models/Sale';

export interface SalesContextProps {
  data?: Sale[]
}

export const SalesContext = createContext<SalesContextProps>({} as SalesContextProps);