import React from 'react';
import { useSection } from '../../../hooks/useSection';
import { useAuth } from '../../Auth';
import { Client } from '../models/Client';
import { ClientToAdd } from '../models/ClientToAdd';
import { ClientToUpdate } from '../models/ClientToUpdate';
import {
  getClients,
  addClient,
  updateClient,
  deleteClient,
} from './graphql/queries';
import { ClientsContext, ClientsContextProps } from './ClientsContext';

export const ClientsProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const { data, add, update, delete_ } = useSection<
    Client,
    ClientToAdd,
    ClientToUpdate
  >('clients', {
    getQuery: getClients,
    addQuery: addClient,
    updateQuery: updateClient,
    deleteQuery: deleteClient,
  });

  const contextValue: ClientsContextProps = {
    data,
    add: (client) =>
      user?._id && add({ variables: { userId: user._id, ...client } }),
    update: (client) => user?._id && update({ variables: client }),
    delete: (clientId) =>
      user?._id && delete_({ variables: { _id: clientId } }),
  };

  return (
    <ClientsContext.Provider value={contextValue}>
      {children}
    </ClientsContext.Provider>
  );
};
