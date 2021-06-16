import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthScreen, useAuth } from '../../components/Auth';
import { useStyles } from './MainNavigatorStackStyles';
import { Text } from '../../components/Theme';
import { SectionBottomTabs } from '../SectionBottomTabs';

export type MainStackNavigatorProps = {
  auth: undefined;
  sectionBottomTabs: undefined;
};

const Stack = createStackNavigator<MainStackNavigatorProps>();

export const MainStackNavigator = () => {
  const styles = useStyles();
  const { state } = useAuth();

  if (state == 'unknown') return null;

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
            <Stack.Screen
              component={SectionBottomTabs}
              name="sectionBottomTabs"
            />
          )
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
