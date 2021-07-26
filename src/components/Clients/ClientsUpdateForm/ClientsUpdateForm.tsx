import { useFormik } from 'formik';
import React, { FC, useEffect } from 'react';
import { Button, Input, Text } from '../../Theme';
import { useStyles } from './ClientsUpdateFormStyles';
import { useClients } from '../context';
import { useModal } from '../../Modal';
import { Client } from '../models/Client';
import { initialValues, validationSchema } from './helpers';

interface Props {
  clientId: string;
}

export const ClientsUpdateForm: FC<Props> = ({ clientId }) => {
  const clients = useClients();
  const styles = useStyles();
  const modal = useModal();
  const formik = useFormik<Client>({
    initialValues: { ...initialValues, _id: clientId },
    validationSchema,
    onSubmit: (params) => {
      clients.update(params);
      modal.handleHide();
    },
  });

  useEffect(() => {
    const client = clients.data?.find((client) => client._id === clientId);

    client && formik.setValues(client);
  }, []);

  return (
    <>
      <Text style={styles.title}>Editar cliente {formik.values.name}</Text>
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
