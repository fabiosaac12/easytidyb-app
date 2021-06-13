import React, { useState } from 'react';
import { AllowedModes } from '../models/AllowedModes';
import { SnackbarContext, SnackbarContextProps } from './SnackbarContext';


export const SnackbarProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [mode, setMode] = useState<AllowedModes>('info');

  const handleHide = () => setVisible(false);
  const handleShow = (message: string, mode: AllowedModes = 'info') => {
    if (!message) throw new Error('message can\'t be undefined');

    setMessage(message);
    setMode(mode);
    setVisible(true);
  };

  const contextValue: SnackbarContextProps = {
    visible,
    message,
    mode,
    handleHide,
    handleShow
  };

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
    </SnackbarContext.Provider>
  );
};
