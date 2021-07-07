import React, { useState, useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { ApolloProvider } from '@apollo/client/react';
import { Observable } from '@apollo/client';
import { useAuth } from '../../Auth';
import { getItem } from '../../../utils/localStorage';
import { refresh } from '../../../api';
import { graphqlBackendUrl } from '../../../config';
import { SalesProvider } from '../../Sales';
import { ProductsProvider } from '../../Products';
import { OrdersProvider } from '../../Orders';
import { SuppliersProvider } from '../../Suppliers';
import { ClientsProvider } from '../../Clients';

export const DataProvider: React.FC = ({ children }) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const { logout, user } = useAuth();

  useEffect(() => {
    const httpLink = new HttpLink({
      uri: graphqlBackendUrl,
    });

    const authMiddleware = new ApolloLink(async (operation, forward) => {
      const token = await getItem('access_token');

      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return forward(operation);
    });

    const errorLink = onError(
      ({ graphQLErrors, networkError, operation, forward }) => {
        const statusCode = networkError?.statusCode;

        graphQLErrors && console.log(graphQLErrors);

        switch (statusCode) {
          case 403:
            return new Observable((observer) => {
              refresh()
                .then((newToken) => {
                  const oldHeaders = operation.getContext().headers;

                  operation.setContext({
                    headers: {
                      ...oldHeaders,
                      authorization: `Bearer ${newToken}`,
                    },
                  });
                })
                .then(() => {
                  const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                  };

                  forward(operation).subscribe(subscriber);
                })
                .catch((error) => {
                  logout();
                  observer.error(error);
                });
            });
          case 401:
            logout();
            break;
          default:
            console.log('no connection');
        }
      },
    );

    const client = new ApolloClient({
      link: from([authMiddleware, errorLink, httpLink]),
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              suppliers: {
                merge(existing, incoming) {
                  return incoming;
                },
              },
            },
          },
        },
      }),
    });

    setClient(client);
  }, []);

  if (!client || !user) {
    return <>{children}</>;
  }

  return (
    <ApolloProvider client={client}>
      <SuppliersProvider>
        {/* <OrdersProvider>
          <ProductsProvider>
            <ClientsProvider>
              <SalesProvider> */}
        {children}
        {/* </SalesProvider>
            </ClientsProvider>
          </ProductsProvider>
        </OrdersProvider> */}
      </SuppliersProvider>
    </ApolloProvider>
  );
};
