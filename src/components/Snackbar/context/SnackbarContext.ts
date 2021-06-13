import { createContext } from 'react';
import { AllowedModes } from '../models/AllowedModes';

export interface SnackbarContextProps {
  visible: boolean;
  message: string;
  mode: AllowedModes;
  handleHide: () => void;
  handleShow: (message: string, mode: AllowedModes) => void;
}

export const SnackbarContext = createContext<SnackbarContextProps>({} as SnackbarContextProps);
