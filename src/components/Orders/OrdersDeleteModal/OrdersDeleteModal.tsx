import React, { FC, useEffect, useState } from 'react';
import { useModal } from '../../Modal';
import { Button, Text } from '../../Theme';
import { Order } from '../models/Order';
import { useOrders } from '../context/useOrders';
import { useStyles } from './OrdersDeleteModalStyles';

interface Props {
  orderId: string;
}

export const OrdersDeleteModal: FC<Props> = ({ orderId }) => {
  const styles = useStyles();
  const orders = useOrders();
  const modal = useModal();
  const [order, setOrder] = useState<Order>();

  useEffect(() => {
    const order = orders.data?.find((order) => order._id === orderId);

    setOrder(order);
  }, []);

  const handleSubmit = () => {
    orders.delete(orderId);
    modal.handleHide();
  };

  return (
    <>
      <Text style={styles.title}>
        Estas seguro de querer eliminar el pedido?
      </Text>
      <Button
        style={styles.cancelButton}
        color="secondary"
        title="CANCELAR"
        onPress={modal.handleHide}
      />
      <Button color="primary" title="ACEPTAR" onPress={handleSubmit} />
    </>
  );
};
