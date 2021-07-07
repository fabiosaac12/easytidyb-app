import React from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { withLayout } from '../../hoc';
import { Text } from '../Theme';
import { useSuppliers } from './context';
import { useStyles } from './SuppliersScreenStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FloatingActionButton } from '../FloatingActionButton';
import { useModal } from '../Modal';
import { SuppliersAddForm } from './SuppliersAddForm';
import { SuppliersUpdateForm } from './SuppliersUpdateForm';

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
        renderItem={({ item }) => (
          <View key={item._id} style={styles.supplierContainer}>
            <View style={styles.defaultImage}>
              <Icon size={45} name="business" style={styles.defaultImageIcon} />
            </View>
            <View style={styles.content}>
              <Text style={styles.name} numberOfLines={1}>
                {item.name}
              </Text>
              <Text numberOfLines={1} style={styles.contact}>
                {item.contact}
              </Text>
            </View>
            <View style={styles.actionButtonsContainer}>
              <TouchableOpacity
                onPress={() =>
                  modal.handleOpen({
                    content: <SuppliersUpdateForm supplierId={item._id} />,
                  })
                }
                activeOpacity={0.8}
                style={styles.actionButton}
              >
                <Icon name="edit" style={styles.editIcon} size={30} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.actionButton}>
                <Icon name="delete" style={styles.deleteIcon} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <FloatingActionButton
        iconName="add"
        onPress={() => modal.handleOpen({ content: <SuppliersAddForm /> })}
        position="br"
      />
    </>
  );
});
