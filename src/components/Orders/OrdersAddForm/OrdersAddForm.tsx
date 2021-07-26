import { useFormik } from 'formik';
import React from 'react';
import { Button, Input, Text } from '../../Theme';
import { useStyles } from './OrdersAddFormStyles';
import { useOrders } from '../context';
import { useModal } from '../../Modal';
import { useSuppliers } from '../../Suppliers';
import { Select } from '../../Theme/components/Select';
import { DatePicker } from '../../Theme/components/DatePicker';
import { mapValues } from './helpers';
import { initialValues, validationSchema } from './helpers';

export const OrdersAddForm = () => {
  const suppliers = useSuppliers();
  const orders = useOrders();
  const styles = useStyles();
  const modal = useModal();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const mappedValues = mapValues(values);

      orders.add(mappedValues);
      modal.handleHide();
    },
  });

  return (
    <>
      <Text style={styles.title}>Agregar un nuevo pedido</Text>
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
      <Button title="CREAR" color="primary" onPress={formik.handleSubmit} />
    </>
  );
};
