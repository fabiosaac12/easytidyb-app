import { useContext } from 'react';
import { SalesContext } from './SalesContext';

export const useSales = () => useContext(SalesContext);