import { StackScreenProps } from '@react-navigation/stack';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useClients } from '../../../Clients';
import { Button, DatePicker, Select, Text } from '../../../Theme';
import { FormValues } from '../models/FormValues';
import { SalesAddFormStackNavigatorProps } from '../SalesAddForm';
import { useStyles } from './SalesAddFormPage1Styles';

interface Props
  extends StackScreenProps<SalesAddFormStackNavigatorProps, 'page1'> {}

export const SalesAddFormPage1: FC<Props> = ({ navigation }) => {
  const styles = useStyles();
  const clients = useClients();

  const formik = useFormikContext<FormValues>();

  return (
    <>
      <Text style={styles.title}>Agregar una nueva venta</Text>
      {clients.data && (
        <Select
          value={formik.values.clientId}
          setValue={formik.setFieldValue.bind(null, 'clientId')}
          data={clients.data.map((client) => ({
            label: client.name,
            extra: client.contact,
            value: client._id,
          }))}
          placeholder="Selecciona un cliente"
          label="Cliente"
        />
      )}
      <DatePicker
        label="Fecha de la venta"
        placeholder="Selecciona la fecha de la venta"
        value={formik.values.date}
        setValue={formik.setFieldValue.bind(null, 'date')}
      />
      <Select
        value={formik.values.type}
        disabled={!!formik.values.products.length}
        setValue={formik.setFieldValue.bind(null, 'type')}
        data={[
          {
            label: 'Al detal',
            value: 'retail',
          },
          {
            label: 'Al mayor',
            value: 'wholesale',
          },
        ]}
        placeholder="Selecciona un tipo de venta"
        label="Tipo de venta"
        canSearch={false}
      />
      <View style={styles.spacer} />
      <Button
        disabled={
          !formik.values.clientId || !formik.values.date || !formik.values.type
        }
        title="Siguiente"
        onPress={() => navigation.navigate('page2')}
      />
    </>
  );
};
