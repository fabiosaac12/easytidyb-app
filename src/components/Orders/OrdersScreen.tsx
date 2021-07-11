import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { withLayout } from '../../hoc';
import { FloatingActionButton } from '../FloatingActionButton';
import { useModal } from '../Modal';
import { useOrders } from './context';
import { OrderCard } from './OrderCard';
import { OrdersAddForm } from './OrdersAddForm';
import { useStyles } from './OrdersScreenStyles';

export const OrdersScreen = withLayout(() => {
  const orders = useOrders();
  const styles = useStyles();
  const modal = useModal();

  return (
    <>
      <FlatList
        ListHeaderComponent={<View style={styles.spacer} />}
        ListFooterComponent={<View style={styles.spacer} />}
        showsVerticalScrollIndicator={false}
        data={orders.data}
        keyExtractor={(supplier) => supplier._id}
        renderItem={({ item }) => <OrderCard order={item} />}
      />
      <FloatingActionButton
        iconName="add"
        onPress={() => modal.handleOpen({ content: <OrdersAddForm /> })}
        position="br"
      />
    </>
  );
});
