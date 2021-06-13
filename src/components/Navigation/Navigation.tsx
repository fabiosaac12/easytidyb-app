import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Auth, useAuth } from '../Auth';
import { Section } from '../Section';
import { useStyles } from './NavigationStyles';
import { Text } from '../Theme';

export type StackNavigatorProps = {
  auth: undefined,
  section: undefined,
};

const Stack = createStackNavigator<StackNavigatorProps>();

const StackNavigator = () => {
  const styles = useStyles();
  const { user } = useAuth();

  return(
    <Stack.Navigator screenOptions={styles}>
      {!user ? (
        <Stack.Screen
          component={Auth}
          name="auth"
          options={{
            headerTitle: () => <Text variant="title">Iniciar Sesion</Text>,
          }}
        />
      ) : (
        <Stack.Screen
          component={Section}
          name="section"
          options={{
            headerTitle: 'Sales',
          }}
        />
      )}
    </Stack.Navigator>
  );
}

export const Navigation = () => (
  <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
);
