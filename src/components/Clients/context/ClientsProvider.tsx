import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Auth';
import { Client } from '../models/Client';
import { getClients } from './graphql/queries';
import { ClientsContext, ClientsContextProps } from './ClientsContext';

export const ClientsProvider: React.FC = ({ children }) => {
  const [clients, setClients] = useState<Client[]>();

  const { user } = useAuth();

  const { data, loading, error } = useQuery(getClients, {
    variables: { userId: user?._id },
  });

  useEffect(() => {
    setClients(data?.clients);
  }, [data]);

  const contextValue: ClientsContextProps = {
    data: clients,
  };

  return (
    <ClientsContext.Provider value={contextValue}>
      {children}
    </ClientsContext.Provider>
  );
};
