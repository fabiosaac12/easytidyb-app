import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useModal } from '../../Modal';
import { Text } from '../../Theme';
import { OrdersDeleteModal } from '../OrdersDeleteModal';
import { Order } from '../models/Order';
import { OrdersUpdateForm } from '../OrdersUpdateForm';
import { useStyles } from './OrderCardStyles';

interface Props {
  order: Order;
}

export const OrderCard: FC<Props> = ({ order }) => {
  const modal = useModal();
  const styles = useStyles();

  return (
    <View key={order._id} style={styles.container}>
      <View style={styles.defaultImage}>
        <Icon size={45} name="business" style={styles.defaultImageIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {new Date(order.date).toDateString()}
        </Text>
        <Text numberOfLines={1} style={styles.contact}>
          {order.expectedObtained}
        </Text>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          onPress={() =>
            modal.handleOpen({
              content: <OrdersUpdateForm orderId={order._id} />,
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
              content: <OrdersDeleteModal orderId={order._id} />,
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
