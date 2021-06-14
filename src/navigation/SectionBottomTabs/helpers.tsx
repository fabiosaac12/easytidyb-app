import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from '../../components/Theme';
import { SectionBottomTabsProps } from './SectionBottomTabs';
import { useStyles } from './SectionBottomTabsStyles';

export const getTabBarIcon = (
  route: keyof SectionBottomTabsProps,
  color: string,
) => {
  let icon: string;

  switch (route) {
    case 'suppliers':
      icon = 'business';
      break;
    case 'orders':
      icon = 'inventory';
      break;
    case 'products':
      icon = 'category';
      break;
    case 'clients':
      icon = 'people';
      break;
    case 'sales':
      icon = 'attach-money';
      break;
  }

  return <Icon name={icon} size={25} color={color} />;
};

export const getTabBarLabel = (
  route: keyof SectionBottomTabsProps,
  color: string,
) => {
  const style = useStyles();

  let label: string;

  switch (route) {
    case 'suppliers':
      label = 'Proveedores';
      break;
    case 'orders':
      label = 'Pedidos';
      break;
    case 'products':
      label = 'Productos';
      break;
    case 'clients':
      label = 'Clientes';
      break;
    case 'sales':
      label = 'Ventas';
      break;
  }

  return (
    <Text variant="body2" style={{ color, ...style.tabLabel }}>
      {label}
    </Text>
  );
};
