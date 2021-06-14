import { createContext } from 'react';
import { Product } from '../models/Product';

export interface ProductsContextProps {
  data?: Product[]
}

export const ProductsContext = createContext<ProductsContextProps>({} as ProductsContextProps);