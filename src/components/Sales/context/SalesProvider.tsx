import React from 'react';
import { useSection } from '../../../hooks/useSection';
import { useAuth } from '../../Auth';
import { Sale } from '../models/Sale';
import { SaleToAdd } from '../models/SaleToAdd';
import { SaleToUpdate } from '../models/SaleToUpdate';
import { getSales, addSale, deleteSale, updateSale } from './graphql/queries';
import { SalesContext, SalesContextProps } from './SalesContext';

export const SalesProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const { data, add, update, delete_ } = useSection<
    Sale,
    SaleToAdd,
    SaleToUpdate
  >('sales', {
    getQuery: getSales,
    addQuery: addSale,
    updateQuery: updateSale,
    deleteQuery: deleteSale,
  });

  const contextValue: SalesContextProps = {
    data,
    add: (sale) =>
      user?._id && add({ variables: { userId: user._id, ...sale } }),
    update: (sale) => user?._id && update({ variables: sale }),
    delete: (saleId) => user?._id && delete_({ variables: { _id: saleId } }),
  };

  return (
    <SalesContext.Provider value={contextValue}>
      {children}
    </SalesContext.Provider>
  );
};
