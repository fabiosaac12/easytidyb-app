import React from 'react';
import 'react-native-gesture-handler';
import { MainStackNavigator } from './navigation/MainNavigatorStack';
import { AuthProvider } from './components/Auth';
import { DataProvider } from './components/Data';
import { ThemeProvider } from './components/Theme';
import { LoaderProvider } from './components/Loader';
import { SnackbarProvider } from './components/Snackbar';

export const Root = () => (
  <ThemeProvider defaultTheme="light">
    <LoaderProvider>
      <SnackbarProvider>
        <AuthProvider>
          <DataProvider>
            <MainStackNavigator />
          </DataProvider>
        </AuthProvider>
      </SnackbarProvider>
    </LoaderProvider>
  </ThemeProvider>
);
