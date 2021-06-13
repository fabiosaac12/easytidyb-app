import { auth } from '../auth';
import { getItem, removeItem, setItem } from '../../utils/localStorage';
import { LoginData } from '../models/LoginData';
import { RefreshResponse } from '../models/RefreshResponse';
import { LoginResponse } from '../models/LoginResponse';

export const login = async (loginData: LoginData) => {
  const response = await auth.post<LoginResponse>('/login', loginData);
  const { accessToken, refreshToken, ...user } = response.data;

  await setItem('access_token', accessToken);
  await setItem('refresh_token', refreshToken);

  return user;
};

export const refresh = async () => {
  const refreshToken = await getItem('refresh_token');
  const response = await auth.post<RefreshResponse>('/refreshToken', { refreshToken });
  const { accessToken } = response.data;

  await setItem('access_token', accessToken);

  return accessToken; 
};

export const logout = async () => {
  const refreshToken = await getItem('refresh_token');

  refreshToken && auth.delete('/logout', { data: { refreshToken } });

  removeItem('access_token');
  removeItem('refresh_token');
};
