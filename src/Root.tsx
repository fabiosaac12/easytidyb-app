import React from 'react';
import { Navigation } from './components/Navigation';
import { AuthProvider } from './components/Auth';
import { ApolloProvider } from './components/Apollo';
import { ThemeProvider } from './components/Theme';
import { LoaderProvider } from './components/Loader';
import { SnackbarProvider } from './components/Snackbar';

export const Root = () => (
  <LoaderProvider>
    <SnackbarProvider>
      <AuthProvider>
        <ApolloProvider>
          <ThemeProvider defaultTheme="light">
            <Navigation />
          </ThemeProvider>
        </ApolloProvider>
      </AuthProvider>
    </SnackbarProvider>
  </LoaderProvider>
);
