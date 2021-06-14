import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Auth';
import { Product } from '../models/Product';
import { getProducts } from './graphql/queries';
import { ProductsContext, ProductsContextProps } from './ProductsContext';

export const ProductsProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>();

  const { user } = useAuth();

  const { data, loading, error } = useQuery(getProducts, {
    variables: { userId: user?._id },
  });

  useEffect(() => {
    setProducts(data?.products);
  }, [data]);

  const contextValue: ProductsContextProps = {
    data: products,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
