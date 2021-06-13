import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useAuth } from '../../Auth';
import { SectionContext, SectionContextProps } from './SectionContext';
import { queries } from '../graphql';
import { Sections } from '../models/Sections';
import { Sale } from '../models/Sale';
import { Product } from '../models/Product';
import { Client } from '../models/Client';
import { Order } from '../models/Order';
import { Supplier } from '../models/Supplier';

export const SectionProvider: React.FC = ({ children }) => {
  const [section, setSection] = useState<Sections>('clients');
  const [sales, setSales] = useState<Sale[]>();
  const [products, setProducts] = useState<Product[]>();
  const [clients, setClients] = useState<Client[]>();
  const [orders, setOrders] = useState<Order[]>();
  const [suppliers, setSuppliers] = useState<Supplier[]>();

  const { user } = useAuth();

  const { data: sectionData, loading, error } = useQuery(queries[section], {
    variables: { userId: user?._id }
  });

  console.log(section, user?._id, sectionData, error)

  useEffect(() => {
    if (sectionData) {
      const setSectionData =
        section === 'sales' ? setSales
        : section === 'clients' ? setClients
        : section === 'products' ? setProducts
        : section === 'orders' ? setOrders
        : section === 'suppliers' && setSuppliers;

        setSectionData && setSectionData(sectionData);
    }
  }, [sectionData]);

  const contextValue: SectionContextProps = {
    section,
    data: section === 'sales' ? sales
      : section === 'clients' ? clients
      : section === 'products' ? products
      : section === 'orders' ? orders
      : suppliers,
    loading,
    error
  };

  return (
    <SectionContext.Provider value={contextValue}>
      {children}
    </SectionContext.Provider>
  );
};
