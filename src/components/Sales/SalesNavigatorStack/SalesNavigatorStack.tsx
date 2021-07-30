import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useStyles } from './SalesNavigatorStackStyles';
import { Text } from '../../Theme';
import { SalesScreen } from '../SalesScreen';
import { SalesAddForm } from '../SalesAddForm';

export type SalesStackNavigatorProps = {
  list: undefined;
  add: undefined;
};

const Stack = createStackNavigator<SalesStackNavigatorProps>();

export const SalesStackNavigator = () => {
  const styles = useStyles();

  return (
    <Stack.Navigator screenOptions={styles}>
      <Stack.Screen
        component={SalesScreen}
        name="list"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={SalesAddForm}
        name="add"
        options={{
          headerTitle: () => <Text variant="title">Agregar una venta</Text>,
        }}
      />
    </Stack.Navigator>
  );
};
