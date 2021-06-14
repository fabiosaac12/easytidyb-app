import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Auth, useAuth } from '../../components/Auth';
import { useStyles } from './MainNavigatorStackStyles';
import { Text } from '../../components/Theme';
import { SectionBottomTabs } from '../SectionBottomTabs';

export type MainStackNavigatorProps = {
  auth: undefined,
  sectionBottomTabs: undefined,
};

const Stack = createStackNavigator<MainStackNavigatorProps>();

export const MainStackNavigator = () => {
  const styles = useStyles();
  const { user } = useAuth();

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ ...styles, headerShown: false}}>
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
            component={SectionBottomTabs}
            name="sectionBottomTabs"
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
