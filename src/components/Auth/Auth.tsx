import React, { useState, useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View } from 'react-native';
import { useAuth } from './context';
import { Button, Input, useTheme } from '../Theme';
import { withLayout } from '../../hoc';
import { StackNavigatorProps } from '../Navigation';

interface Props extends StackScreenProps<StackNavigatorProps, 'auth'> {}

export const Auth = withLayout<Props>(({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, user } = useAuth();
  const { changeTheme, themeName } = useTheme();

  const submit = () => {
    login({ username, password });
  };

  useEffect(() => {
    user && navigation.navigate('section');
  }, [user]);

  const switchTheme = () => {
    themeName === 'dark' ? changeTheme('light') : changeTheme('dark');
  };

  return (
    <View>
      <Button color="lightBlue" title="Theme" onPress={switchTheme}/>
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
      <Button
        onPress={submit}
        title="Iniciar sesion"
        color="darkBlue"
      />
    </View>
  );
});
