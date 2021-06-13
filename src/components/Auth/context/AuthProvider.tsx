import React, { useState, useEffect } from 'react';
import {
  login as apiLogin,
  logout as apiLogout
} from '../../../api';
import { AuthContext, AuthContextProps } from './AuthContext';
import { useLoader } from '../../Loader';
import { useSnackbar } from '../../Snackbar';
import { LoginData } from '../../../api/models/LoginData';
import { User } from '../models/User';

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const loader = useLoader();
  const snackbar = useSnackbar();

  const login = async (data: LoginData) => {
    loader.handleShow();
    try {
      const user = await apiLogin(data);

      setUser(user);
    } catch (error) {
      switch (error.response?.status) {
        case 401:
          snackbar.handleShow('Usuario o contrasenia incorrectos', 'danger');
          break;
        case 500:
          snackbar.handleShow('Ha ocurrido un error en el servidor', 'danger');
        default:
          snackbar.handleShow('Ha ocurrido un error', 'danger');
      }
    } finally {
      loader.handleHide();
    }
  };

  const logout = () => {
    apiLogout();
    setUser(undefined);
  };

  const contextValue: AuthContextProps = {
    login,
    logout,
    user
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
