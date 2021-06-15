import React from 'react';
import { Client } from '../models/Client';
import { getClients } from './graphql/queries';
import { ClientsContext, ClientsContextProps } from './ClientsContext';
import { useSection } from '../../../hooks/useSection';

export const ClientsProvider: React.FC = ({ children }) => {
  const [clients, setClients] = useSection<Client>('clients', getClients);

  const contextValue: ClientsContextProps = {
    data: clients,
  };

  return (
    <ClientsContext.Provider value={contextValue}>
      {children}
    </ClientsContext.Provider>
  );
};
