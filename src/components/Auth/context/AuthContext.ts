import { createContext } from 'react';
import { LoginData } from '../../../api/models/LoginData';
import { State } from '../models/State';
import { User } from '../models/User';

export interface AuthContextProps {
  login: (data: LoginData) => void;
  logout: () => void;
  user?: User;
  state: State;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);
