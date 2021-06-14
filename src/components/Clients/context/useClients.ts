import { useContext } from 'react';
import { ClientsContext } from './ClientsContext';

export const useClients = () => useContext(ClientsContext);
