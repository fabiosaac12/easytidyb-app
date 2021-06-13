import { useContext } from 'react';
import { SnackbarContext } from './SnackbarContext';

export const useSnackbar = () => useContext(SnackbarContext);
