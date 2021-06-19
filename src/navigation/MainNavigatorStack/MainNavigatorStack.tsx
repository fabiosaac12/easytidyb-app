import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthScreen, useAuth } from '../../components/Auth';
import { useStyles } from './MainNavigatorStackStyles';
import { Text } from '../../components/Theme';
import { DrawerNavigator } from '../DrawerNavigator';

export type MainStackNavigatorProps = {
  auth: undefined;
  drawerNavigator: undefined;
};

const Stack = createStackNavigator<MainStackNavigatorProps>();

export const MainStackNavigator = () => {
  const styles = useStyles();
  const { state } = useAuth();

  if (state === 'unknown') {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ ...styles, headerShown: false }}>
        {state === 'not-authenticated' ? (
          <Stack.Screen
            component={AuthScreen}
            name="auth"
            options={{
              headerTitle: () => <Text variant="title">Iniciar Sesion</Text>,
            }}
          />
        ) : (
          state === 'authenticated' && (
            <Stack.Screen component={DrawerNavigator} name="drawerNavigator" />
          )
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
