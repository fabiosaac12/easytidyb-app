import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View } from 'react-native';
import { useAuth } from './context';
import { Button, Input, useTheme } from '../Theme';
import { withLayout } from '../../hoc';
import { MainStackNavigatorProps } from '../../navigation/MainNavigatorStack';

interface Props extends StackScreenProps<MainStackNavigatorProps, 'auth'> {}

export const AuthScreen = withLayout<Props>(() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { changeTheme, themeName } = useTheme();

  const submit = () => {
    login({ username, password });
  };

  const switchTheme = () => {
    themeName === 'dark' ? changeTheme('light') : changeTheme('dark');
  };

  return (
    <View>
      <Button color="primary" title="Theme" onPress={switchTheme} />
      <Input
        value={username}
        keyboardType="default"
        autoCapitalize="none"
        spellCheck={false}
        placeholder="Escribe tu username..."
        label="Username"
        onChangeText={setUsername}
      />
      <Input
        value={password}
        keyboardType="visible-password"
        placeholder="Escribe tu contrasenia..."
        label="Password"
        onChangeText={setPassword}
      />
      <Button onPress={submit} title="Iniciar sesion" color="primary" />
    </View>
  );
});
