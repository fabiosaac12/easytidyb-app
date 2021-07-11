import React from 'react';
import { useSection } from '../../../hooks/useSection';
import { useAuth } from '../../Auth';
import { Supplier } from '../models/Supplier';
import { SupplierToAdd } from '../models/SupplierToAdd';
import { SupplierToUpdate } from '../models/SupplierToUpdate';
import {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
} from './graphql/queries';
import { SuppliersContext, SuppliersContextProps } from './SuppliersContext';

export const SuppliersProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const { data, add, update, delete_ } = useSection<
    Supplier,
    SupplierToAdd,
    SupplierToUpdate
  >('suppliers', {
    getQuery: getSuppliers,
    addQuery: addSupplier,
    updateQuery: updateSupplier,
    deleteQuery: deleteSupplier,
  });

  const contextValue: SuppliersContextProps = {
    data,
    add: (supplier) =>
      user?._id && add({ variables: { userId: user._id, ...supplier } }),
    update: (supplier) => user?._id && update({ variables: supplier }),
    delete: (supplierId) =>
      user?._id && delete_({ variables: { _id: supplierId } }),
  };

  return (
    <SuppliersContext.Provider value={contextValue}>
      {children}
    </SuppliersContext.Provider>
  );
};
