import { createContext } from 'react';
import { Client } from '../models/Client';

export interface ClientsContextProps {
  data?: Client[]
}

export const ClientsContext = createContext<ClientsContextProps>({} as ClientsContextProps);