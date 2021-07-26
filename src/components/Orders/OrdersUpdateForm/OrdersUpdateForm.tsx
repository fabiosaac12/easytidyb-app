import { useFormik } from 'formik';
import React, { FC, useEffect } from 'react';
import { Button, Input, Text } from '../../Theme';
import { useStyles } from './OrdersUpdateFormStyles';
import { useOrders } from '../context';
import { useModal } from '../../Modal';
import { useSuppliers } from '../../Suppliers';
import { Select } from '../../Theme/components/Select';
import { DatePicker } from '../../Theme/components/DatePicker';
import {
  counterMapValues,
  mapValues,
  initialValues,
  validationSchema,
} from './helpers';

interface Props {
  orderId: string;
}

export const OrdersUpdateForm: FC<Props> = ({ orderId }) => {
  const suppliers = useSuppliers();
  const orders = useOrders();
  const styles = useStyles();
  const modal = useModal();
  const formik = useFormik({
    initialValues: { _id: orderId, ...initialValues },
    validationSchema,
    onSubmit: (values) => {
      const mappedValues = mapValues(values);

      orders.update(mappedValues);
      modal.handleHide();
    },
  });

  useEffect(() => {
    const order = orders.data?.find((order) => order._id === orderId);

    if (order) {
      const formValues = counterMapValues(order);

      order && formik.setValues(formValues);
    }
  }, []);

  return (
    <>
      <Text style={styles.title}>Modificar un pedido</Text>
      {suppliers.data && (
        <Select
          value={formik.values.supplierId}
          setValue={formik.setFieldValue.bind(null, 'supplierId')}
          data={suppliers.data.map((supplier) => ({
            label: supplier.name,
            extra: supplier.contact,
            value: supplier._id,
          }))}
          placeholder="Selecciona un proveedor"
          label="Proveedor"
        />
      )}
      <Input
        keyboardType="numeric"
        placeholder="Escribe el obtenido esperado"
        label="Obtenido esperado"
        onChangeText={formik.setFieldValue.bind(null, 'expectedObtained')}
        value={formik.values.expectedObtained}
      />
      <DatePicker
        label="Fecha del pedido"
        placeholder="Selecciona la fecha del pedido"
        value={formik.values.date}
        setValue={formik.setFieldValue.bind(null, 'date')}
      />
      <Button title="MODIFICAR" color="primary" onPress={formik.handleSubmit} />
    </>
  );
};
