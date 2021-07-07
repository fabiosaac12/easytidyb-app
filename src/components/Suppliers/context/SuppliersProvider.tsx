import React from 'react';
import { useSection } from '../../../hooks/useSection';
import { useAuth } from '../../Auth';
import { Supplier } from '../models/Supplier';
import { SupplierToAdd } from '../models/SupplierToAdd';
import { getSuppliers, addSupplier } from './graphql/queries';
import { SuppliersContext, SuppliersContextProps } from './SuppliersContext';

export const SuppliersProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const { data, add } = useSection<SupplierToAdd, Supplier>('suppliers', {
    getQuery: getSuppliers,
    addQuery: addSupplier,
  });

  const contextValue: SuppliersContextProps = {
    data,
    add: (supplier) =>
      user?._id && add({ variables: { userId: user._id, ...supplier } }),
  };

  return (
    <SuppliersContext.Provider value={contextValue}>
      {children}
    </SuppliersContext.Provider>
  );
};
