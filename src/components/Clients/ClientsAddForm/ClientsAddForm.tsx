import { useFormik } from 'formik';
import React from 'react';
import { Button, Input, Text } from '../../Theme';
import { useStyles } from './ClientsAddFormStyles';
import * as yup from 'yup';
import { useClients } from '../context';
import { useModal } from '../../Modal';

export const ClientsAddForm = () => {
  const clients = useClients();
  const styles = useStyles();
  const modal = useModal();
  const formik = useFormik({
    initialValues: {
      name: '',
      location: '',
      contact: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Es requerido'),
      location: yup.string(),
      contact: yup.string(),
    }),
    onSubmit: (params) => {
      clients.add(params);
      modal.handleHide();
    },
  });

  return (
    <>
      <Text style={styles.title}>Agregar un nuevo cliente</Text>
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
      <Button title="CREAR" color="primary" onPress={formik.handleSubmit} />
    </>
  );
};
