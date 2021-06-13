import { ApolloError } from '@apollo/client';
import { createContext } from 'react';
import { Client } from '../models/Client';
import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { Sale } from '../models/Sale';
import { Sections } from '../models/Sections';
import { Supplier } from '../models/Supplier';

export interface SectionContextProps {
  section:  Sections,
  data?: Sale[] | Product[] | Client[] | Order[] | Supplier[],
  loading: boolean,
  error?: ApolloError
}

export const SectionContext = createContext<SectionContextProps>({} as SectionContextProps);
