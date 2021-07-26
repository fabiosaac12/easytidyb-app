import { useFormik } from 'formik';
import React, { FC, useEffect } from 'react';
import { Button, Input, Text } from '../../Theme';
import { useStyles } from './SuppliersUpdateFormStyles';
import { useSuppliers } from '../context';
import { useModal } from '../../Modal';
import { Supplier } from '../models/Supplier';
import { initialValues, validationSchema } from './helpers';

interface Props {
  supplierId: string;
}

export const SuppliersUpdateForm: FC<Props> = ({ supplierId }) => {
  const suppliers = useSuppliers();
  const styles = useStyles();
  const modal = useModal();
  const formik = useFormik<Supplier>({
    initialValues: { _id: supplierId, ...initialValues },
    validationSchema,
    onSubmit: (params) => {
      suppliers.update(params);
      modal.handleHide();
    },
  });

  useEffect(() => {
    const supplier = suppliers.data?.find(
      (supplier) => supplier._id === supplierId,
    );

    supplier && formik.setValues(supplier);
  }, []);

  return (
    <>
      <Text style={styles.title}>Editar proveedor {formik.values.name}</Text>
      <Input
        keyboardType="default"
        autoCapitalize="none"
        spellCheck={false}
        placeholder="Escribe el nombre"
        label="Nombre"
        onChangeText={formik.setFieldValue.bind(null, 'name')}
        value={formik.values.name}
      />
      <Input
        keyboardType="default"
        autoCapitalize="none"
        spellCheck={false}
        placeholder="Escribe la ubicacion"
        label="Ubicacion"
        onChangeText={formik.setFieldValue.bind(null, 'location')}
        value={formik.values.location}
      />
      <Input
        keyboardType="default"
        autoCapitalize="none"
        spellCheck={false}
        placeholder="Escribe el numero telefonico"
        label="Contacto"
        onChangeText={formik.setFieldValue.bind(null, 'contact')}
        value={formik.values.contact}
      />
      <Button title="EDITAR" color="primary" onPress={formik.handleSubmit} />
    </>
  );
};
