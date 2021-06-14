import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Auth';
import { Supplier } from '../models/Supplier';
import { getSuppliers } from './graphql/queries';
import { SuppliersContext, SuppliersContextProps } from './SuppliersContext'

export const SuppliersProvider: React.FC = ({ children }) => {
  const [suppliers, setSuppliers] = useState<Supplier[]>();

  const { user } = useAuth();

  const { data, loading, error } = useQuery(getSuppliers, {
    variables: { userId: user?._id }
  });

  useEffect(() => {
    setSuppliers(data?.suppliers);
  }, [data])

  const contextValue: SuppliersContextProps = {
    data: suppliers
  }

  return (
    <SuppliersContext.Provider value={contextValue}>
      {children}
    </SuppliersContext.Provider>
  )
}