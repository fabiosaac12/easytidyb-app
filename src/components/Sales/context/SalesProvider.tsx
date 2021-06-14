import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Auth';
import { Sale } from '../models/Sale';
import { getSales } from './graphql/queries';
import { SalesContext, SalesContextProps } from './SalesContext';

export const SalesProvider: React.FC = ({ children }) => {
  const [sales, setSales] = useState<Sale[]>();

  const { user } = useAuth();

  const { data, loading, error } = useQuery(getSales, {
    variables: { userId: user?._id },
  });

  useEffect(() => {
    setSales(data?.sales);
  }, [data]);

  const contextValue: SalesContextProps = {
    data: sales,
  };

  return (
    <SalesContext.Provider value={contextValue}>
      {children}
    </SalesContext.Provider>
  );
};
