import React, { FC, useEffect, useRef } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { SalesAddFormStackNavigatorProps } from '../SalesAddForm';
import { useStyles } from './SalesAddFormPage3Styles';
import { useFormikContext } from 'formik';
import { FormValues } from '../models/FormValues';
import { Button, DatePicker, Input, Select, Text } from '../../../Theme';
import { View } from 'react-native';
import { InitialValuesInForm } from './models/InitialValues';
import { useCalculator } from './hooks/useCalculator';
import { useClients } from '../../../Clients';

interface Props
  extends StackScreenProps<SalesAddFormStackNavigatorProps, 'page3'> {}

export const SalesAddFormPage3: FC<Props> = ({ navigation }) => {
  const styles = useStyles();
  const clients = useClients();
  const formik = useFormikContext<FormValues>();

  const initialValuesRef = useRef<InitialValuesInForm>();

  useEffect(() => {
    const initialValues = formik.values.products.reduce(
      (initialValues, saleProduct) => ({
        ...initialValues,
        obtained: `${+initialValues.obtained + saleProduct.obtained}`,
        profit: `${+initialValues.profit + saleProduct.profit}`,
      }),
      {
        obtained: '0',
        profit: '0',
        discount: '0',
      },
    );

    initialValuesRef.current = initialValues;

    formik.setValues((values) => ({ ...values, ...initialValues }));
  }, []);

  useCalculator(initialValuesRef.current);

  return (
    <>
      <Text style={styles.title}>Vision general</Text>
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
      <View style={styles.separator} />
      <Input
        keyboardType="numeric"
        placeholder="Escribe el dinero obtenido en total"
        label="Dinero obtenido en total"
        onChangeText={(value) =>
          isNaN(+value) || +value < 0
            ? formik.setFieldValue('obtained', '0')
            : value.length > 1 && value.startsWith('0')
            ? formik.setFieldValue('obtained', value.substring(1))
            : !value.length
            ? formik.setFieldValue('obtained', '0')
            : formik.setFieldValue('obtained', value)
        }
        value={formik.values.obtained || '0'}
      />
      <Input
        keyboardType="numeric"
        placeholder="Escribe las ganancias en total"
        label="Ganancias en total"
        disabled
        onChangeText={formik.setFieldValue.bind(null, 'profit')}
        value={formik.values.profit || '0'}
      />
      <Input
        keyboardType="numeric"
        placeholder="Escribe el descuento general"
        label="Descuento general"
        onChangeText={(value) =>
          isNaN(+value)
            ? formik.setFieldValue('discount', '0')
            : value.length > 1 && value.startsWith('0')
            ? formik.setFieldValue('discount', value.substring(1))
            : !value.length
            ? formik.setFieldValue('discount', '0')
            : formik.setFieldValue('discount', value)
        }
        value={formik.values.discount || '0'}
      />
      <View style={styles.spacer} />
      <View style={styles.navigationButtonsContainer}>
        <Button
          title="Anterior"
          style={styles.previousButton}
          onPress={navigation.goBack}
        />
        <Button
          disabled={
            !formik.values.obtained ||
            !formik.values.profit ||
            !formik.values.discount
          }
          title="Confirmar"
          style={styles.submitButton}
          onPress={formik.handleSubmit}
        />
      </View>
    </>
  );
};
