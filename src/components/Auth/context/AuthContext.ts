import { createContext } from 'react';
import { LoginData } from '../../../api/models/LoginData';
import { User } from '../models/User';

export interface AuthContextProps {
  login: (data: LoginData) => void,
  logout: () => void,
  user?: User
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
