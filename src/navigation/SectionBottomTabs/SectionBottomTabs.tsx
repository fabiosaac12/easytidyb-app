import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SalesScreen } from './../../components/Sales';
import { ClientsScreen, useClients } from './../../components/Clients';
import { ProductsScreen, useProducts } from './../../components/Products';
import { OrdersScreen, useOrders } from './../../components/Orders';
import { SuppliersScreen, useSuppliers } from './../../components/Suppliers';
import { getTabBarIcon, getTabBarLabel } from './helpers';
import { useStyles } from './SectionBottomTabsStyles';

export type SectionBottomTabsProps = {
  suppliers: undefined;
  orders: undefined;
  products: undefined;
  clients: undefined;
  sales: undefined;
};

const Tab = createBottomTabNavigator<SectionBottomTabsProps>();

export const SectionBottomTabs = () => {
  const styles = useStyles();

  // const clients = useClients();
  const suppliers = useSuppliers();
  const orders = useOrders();
  const products = useProducts();

  return (
    <Tab.Navigator
      sceneContainerStyle={styles.sceneContainer}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => getTabBarIcon(route.name, color),
        tabBarLabel: ({ color }) => getTabBarLabel(route.name, color),
      })}
      tabBarOptions={{
        activeTintColor: styles.active.color,
        inactiveTintColor: styles.inactive.color,
        style: styles.tabBar,
        tabStyle: styles.tab,
      }}
    >
      <Tab.Screen name="suppliers" component={SuppliersScreen} />
      {!!suppliers.data?.length && (
        <Tab.Screen name="orders" component={OrdersScreen} />
      )}
      {!!orders.data?.length && (
        <Tab.Screen name="products" component={ProductsScreen} />
      )}
      {!!products.data?.length && (
        <Tab.Screen name="clients" component={ClientsScreen} />
      )}
      {/* {!!products.data?.length && !!clients.data?.length && (
        <Tab.Screen name="sales" component={SalesScreen} />
      )} */}
    </Tab.Navigator>
  );
};
