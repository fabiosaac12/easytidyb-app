import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useModal } from '../../Modal';
import { Text } from '../../Theme';
import { SuppliersDeleteModal } from '../context/SuppliersDeleteModal';
import { Supplier } from '../models/Supplier';
import { SuppliersUpdateForm } from '../SuppliersUpdateForm';
import { useStyles } from './SupplierCardStyles';

interface Props {
  supplier: Supplier;
}

export const SupplierCard: FC<Props> = ({ supplier }) => {
  const modal = useModal();
  const styles = useStyles();

  return (
    <View key={supplier._id} style={styles.container}>
      <View style={styles.defaultImage}>
        <Icon size={45} name="business" style={styles.defaultImageIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {supplier.name}
        </Text>
        <Text numberOfLines={1} style={styles.contact}>
          {supplier.contact}
        </Text>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          onPress={() =>
            modal.handleOpen({
              content: <SuppliersUpdateForm supplierId={supplier._id} />,
            })
          }
          activeOpacity={0.8}
          style={styles.actionButton}
        >
          <Icon name="edit" style={styles.editIcon} size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            modal.handleOpen({
              content: <SuppliersDeleteModal supplierId={supplier._id} />,
            })
          }
          activeOpacity={0.8}
          style={styles.actionButton}
        >
          <Icon name="delete" style={styles.deleteIcon} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
