import React, { useState } from 'react';
import { withLayout } from '../../../hoc';
import { useStyles } from './SalesAddFormStyles';
import { FormikProvider, useFormik } from 'formik';
import { initialValues, mapValues, validationSchema } from './helpers';
import { createStackNavigator } from '@react-navigation/stack';
import { SalesAddFormPage1 } from './SalesAddFormPage1';
import { SalesAddFormPage2 } from './SalesAddFormPage2';
import { FormValues } from './models/FormValues';
import { SalesAddFormPage3 } from './SalesAddFormPage3';
import { SaleToAdd } from '../models/SaleToAdd';

export type SalesAddFormStackNavigatorProps = {
  page1: undefined;
  page2: undefined;
  page3: undefined;
};

const Stack = createStackNavigator<SalesAddFormStackNavigatorProps>();

export const SalesAddForm = withLayout(() => {
  const styles = useStyles();

  const [addedProducts, setAddedProducts] = useState<string[]>([]);

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const sale: SaleToAdd = mapValues(values);

      console.log(sale);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Stack.Navigator
        screenOptions={{ cardStyle: styles.cardStyle, headerShown: false }}
      >
        <Stack.Screen name="page1">
          {(props) => <SalesAddFormPage1 {...props} />}
        </Stack.Screen>
        <Stack.Screen name="page2">
          {(props) => (
            <SalesAddFormPage2
              addedProducts={addedProducts}
              setAddedProducts={setAddedProducts}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="page3">
          {(props) => <SalesAddFormPage3 {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </FormikProvider>
  );
});
