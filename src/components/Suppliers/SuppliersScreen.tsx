import React from 'react';
import { View, FlatList } from 'react-native';
import { withLayout } from '../../hoc';
import { useSuppliers } from './context';
import { useStyles } from './SuppliersScreenStyles';
import { FloatingActionButton } from '../FloatingActionButton';
import { useModal } from '../Modal';
import { SuppliersAddForm } from './SuppliersAddForm';
import { SupplierCard } from './SupplierCard';

export const SuppliersScreen = withLayout(() => {
  const suppliers = useSuppliers();
  const styles = useStyles();
  const modal = useModal();

  return (
    <>
      <FlatList
        ListHeaderComponent={<View style={styles.spacer} />}
        ListFooterComponent={<View style={styles.spacer} />}
        showsVerticalScrollIndicator={false}
        data={suppliers.data}
        keyExtractor={(supplier) => supplier._id}
        renderItem={({ item }) => <SupplierCard supplier={item} />}
      />
      <FloatingActionButton
        iconName="add"
        onPress={() => modal.handleOpen({ content: <SuppliersAddForm /> })}
        position="br"
      />
    </>
  );
});
