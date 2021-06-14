import { useContext } from 'react';
import { SuppliersContext } from './SuppliersContext';

export const useSuppliers = () => useContext(SuppliersContext);
