import React from 'react';
import { useSection } from '../../../hooks/useSection';
import { useAuth } from '../../Auth';
import { Product } from '../models/Product';
import { ProductToAdd } from '../models/ProductToAdd';
import { ProductToUpdate } from '../models/ProductToUpdate';
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from './graphql/queries';
import { ProductsContext, ProductsContextProps } from './ProductsContext';

export const ProductsProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const { data, add, update, delete_ } = useSection<
    Product,
    ProductToAdd,
    ProductToUpdate
  >('products', {
    getQuery: getProducts,
    addQuery: addProduct,
    updateQuery: updateProduct,
    deleteQuery: deleteProduct,
  });

  const contextValue: ProductsContextProps = {
    data,
    add: (product) =>
      user?._id && add({ variables: { userId: user._id, ...product } }),
    update: (product) => user?._id && update({ variables: product }),
    delete: (productId) =>
      user?._id && delete_({ variables: { _id: productId } }),
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
