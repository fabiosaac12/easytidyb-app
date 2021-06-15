import React from 'react';
import { useSection } from '../../../hooks/useSection';
import { Product } from '../models/Product';
import { getProducts } from './graphql/queries';
import { ProductsContext, ProductsContextProps } from './ProductsContext';

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useSection<Product>('products', getProducts);

  const contextValue: ProductsContextProps = {
    data: products,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
