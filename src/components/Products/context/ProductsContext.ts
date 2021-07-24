import { createContext } from 'react';
import { Product } from '../models/Product';
import { ProductToAdd } from '../models/ProductToAdd';
import { ProductToUpdate } from '../models/ProductToUpdate';

export interface ProductsContextProps {
  data?: Product[];
  add: (supplier: ProductToAdd) => void;
  update: (supplier: ProductToUpdate) => void;
  delete: (supplierId: string) => void;
}

export const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps,
);
