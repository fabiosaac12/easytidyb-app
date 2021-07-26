import { createContext } from 'react';
import { Client } from '../models/Client';
import { ClientToAdd } from '../models/ClientToAdd';

export interface ClientsContextProps {
  data?: Client[];
  add: (client: ClientToAdd) => void;
  update: (client: Client) => void;
  delete: (clientId: string) => void;
}

export const ClientsContext = createContext<ClientsContextProps>(
  {} as ClientsContextProps,
);
