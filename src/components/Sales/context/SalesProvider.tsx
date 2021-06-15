import React from 'react';
import { useSection } from '../../../hooks/useSection';
import { Sale } from '../models/Sale';
import { getSales } from './graphql/queries';
import { SalesContext, SalesContextProps } from './SalesContext';

export const SalesProvider: React.FC = ({ children }) => {
  const [sales, setSales] = useSection<Sale>('sales', getSales);

  const contextValue: SalesContextProps = {
    data: sales,
  };

  return (
    <SalesContext.Provider value={contextValue}>
      {children}
    </SalesContext.Provider>
  );
};
