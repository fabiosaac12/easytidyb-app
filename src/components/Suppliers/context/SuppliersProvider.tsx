import React from 'react';
import { useSection } from '../../../hooks/useSection';
import { Supplier } from '../models/Supplier';
import { getSuppliers } from './graphql/queries';
import { SuppliersContext, SuppliersContextProps } from './SuppliersContext';

export const SuppliersProvider: React.FC = ({ children }) => {
  const [suppliers, setSuppliers] = useSection<Supplier>(
    'suppliers',
    getSuppliers,
  );

  const contextValue: SuppliersContextProps = {
    data: suppliers,
  };

  return (
    <SuppliersContext.Provider value={contextValue}>
      {children}
    </SuppliersContext.Provider>
  );
};
