import React, { useState, useEffect } from 'react';
import { login as apiLogin, logout as apiLogout } from '../../../api';
import { AuthContext, AuthContextProps } from './AuthContext';
import { useLoader } from '../../Loader';
import { useSnackbar } from '../../Snackbar';
import { LoginData } from '../../../api/models/LoginData';
import { User } from '../models/User';
import { getItem } from '../../../utils/localStorage';
import jwtDecode from 'jwt-decode';
import { State } from '../models/State';

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [state, setState] = useState<State>('unknown');
  const loader = useLoader();
  const snackbar = useSnackbar();

  useEffect(() => {
    (async () => {
      const refreshToken = await getItem('refresh_token');
      if (refreshToken) {
        const user = jwtDecode<User>(refreshToken);
        setUser(user);
        setState('authenticated');
      } else {
        setState('not-authenticated');
      }
    })();
  }, []);

  const login = async (data: LoginData) => {
    loader.handleShow();
    try {
      const user = await apiLogin(data);

      setUser(user);
      setState('authenticated');
    } catch (error) {
      switch (error.response?.status) {
        case 401:
          snackbar.handleShow('Usuario o contrasenia incorrectos', 'danger');
          break;
        case 500:
          snackbar.handleShow('Ha ocurrido un error en el servidor', 'danger');
          break;
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
    setState('not-authenticated');
  };

  const contextValue: AuthContextProps = {
    login,
    logout,
    user,
    state,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
