import { createContext } from 'react';
import { Product } from '../models/Product';
import { ProductToAdd } from '../models/ProductToAdd';
import { ProductToUpdate } from '../models/ProductToUpdate';

export interface ProductsContextProps {
  data?: Product[];
  add: (product: ProductToAdd) => void;
  update: (product: ProductToUpdate) => void;
  delete: (productId: string) => void;
}

export const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps,
);
