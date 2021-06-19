import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useWindowDimensions, Button } from 'react-native';
import { SectionBottomTabs } from '../SectionBottomTabs';
import { useTheme } from '../../components/Theme';
import { ThemeContextProps } from '../../components/Theme/context/ThemeContext';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();
  const theme = useTheme();

  return (
    <Drawer.Navigator
      drawerContent={getDrawerContent(theme)}
      drawerType={width > 768 ? 'permanent' : 'front'}
    >
      <Drawer.Screen name="sectionBottomTabs" component={SectionBottomTabs} />
    </Drawer.Navigator>
  );
};

const getDrawerContent =
  ({ themeName, theme, changeTheme }: ThemeContextProps) =>
  ({}: DrawerContentComponentProps<DrawerContentOptions>) => {
    return (
      <DrawerContentScrollView
        style={{ backgroundColor: theme.palette.background[100] }}
      >
        <Button
          title="Switch Theme"
          onPress={() => changeTheme(themeName === 'dark' ? 'light' : 'dark')}
        />
      </DrawerContentScrollView>
    );
  };
