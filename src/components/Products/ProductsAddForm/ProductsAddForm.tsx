import React, { useState } from 'react';
import { useOrders } from '../../Orders';
import { useProducts } from '../context';
import { useStyles } from './ProductsAddFormStyles';
import { useModal } from '../../Modal';
import { useFormik } from 'formik';
import { Select, Text, Button, Input } from '../../Theme';
import { mapValues, initialValues, validationSchema } from './helpers';

export const ProductsAddForm = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => setPage((page) => (page < 1 ? page + 1 : page));
  const previousPage = () => setPage((page) => (page > 0 ? page - 1 : page));

  const orders = useOrders();
  const products = useProducts();
  const styles = useStyles();
  const modal = useModal();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const mappedValues = mapValues(values);

      products.add(mappedValues);
    },
  });

  const handleCreate = () => {
    formik.handleSubmit();
    modal.handleHide();
  };

  const handleCreateAndKeepCreating = () => {
    formik.handleSubmit();
    formik.setValues({ ...formik.values, char2: '', initialStock: '' });
    setPage(0);
  };

  return (
    <>
      <Text style={styles.title}>Agregar un nuevo producto</Text>
      {page === 0 ? (
        <>
          {orders.data && (
            <Select
              value={formik.values.orderId}
              setValue={formik.setFieldValue.bind(null, 'orderId')}
              data={orders.data.map((order) => ({
                label: new Date(order.date).toDateString(),
                extra: order.supplier.name,
                value: order._id,
              }))}
              placeholder="Selecciona un pedido"
              label="Pedido"
            />
          )}
          <Input
            placeholder="Escribe el nombre"
            label="Nombre"
            onChangeText={formik.setFieldValue.bind(null, 'name')}
            value={formik.values.name}
          />
          <Input
            placeholder="Escribe la primera caracteristica"
            label="Primera caracteristica"
            onChangeText={formik.setFieldValue.bind(null, 'char1')}
            value={formik.values.char1}
          />
          <Input
            placeholder="Escribe la segunda caracteristica"
            label="Segunda caracteristica"
            onChangeText={formik.setFieldValue.bind(null, 'char2')}
            value={formik.values.char2}
          />
        </>
      ) : (
        <>
          <Input
            keyboardType="numeric"
            placeholder="Escribe el precio al detal"
            label="Precio al detal"
            onChangeText={formik.setFieldValue.bind(null, 'retailPrice')}
            value={formik.values.retailPrice}
          />
          <Input
            keyboardType="numeric"
            placeholder="Escribe el precio al mayor"
            label="Precio al mayor"
            onChangeText={formik.setFieldValue.bind(null, 'wholesalePrice')}
            value={formik.values.wholesalePrice}
          />
          <Input
            keyboardType="numeric"
            placeholder="Escribe el precio de compra"
            label="Precio compra"
            onChangeText={formik.setFieldValue.bind(null, 'purchasePrice')}
            value={formik.values.purchasePrice}
          />
          <Input
            keyboardType="numeric"
            placeholder="Escribe la cantidad inicial"
            label="Cantidad inicial"
            onChangeText={formik.setFieldValue.bind(null, 'initialStock')}
            value={formik.values.initialStock}
          />
        </>
      )}
      {page > 0 && (
        <Button
          title="ANTERIOR"
          style={styles.previousButton}
          onPress={previousPage}
        />
      )}
      {page < 1 && (
        <Button title="SIGUIENTE" color="primary" onPress={nextPage} />
      )}
      {page === 1 && (
        <>
          <Button title="CREAR" color="primary" onPress={handleCreate} />
          <Button
            title="CREAR Y SEGUIR CREANDO"
            color="primary"
            onPress={handleCreateAndKeepCreating}
          />
        </>
      )}
    </>
  );
};
