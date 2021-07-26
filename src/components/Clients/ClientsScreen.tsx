import React from 'react';
import { View, FlatList } from 'react-native';
import { withLayout } from '../../hoc';
import { useClients } from './context';
import { useStyles } from './ClientsScreenStyles';
import { FloatingActionButton } from '../FloatingActionButton';
import { useModal } from '../Modal';
import { ClientsAddForm } from './ClientsAddForm';
import { ClientCard } from './ClientCard';

export const ClientsScreen = withLayout(() => {
  const clients = useClients();
  const styles = useStyles();
  const modal = useModal();

  return (
    <>
      <FlatList
        ListHeaderComponent={<View style={styles.spacer} />}
        ListFooterComponent={<View style={styles.spacer} />}
        showsVerticalScrollIndicator={false}
        data={clients.data}
        keyExtractor={(client) => client._id}
        renderItem={({ item }) => <ClientCard client={item} />}
      />
      <FloatingActionButton
        iconName="add"
        onPress={() => modal.handleOpen({ content: <ClientsAddForm /> })}
        position="br"
      />
    </>
  );
});
