import * as yup from 'yup';
import { OrderToAdd } from '../models/OrderToAdd';

export const mapValues = (values: {
  supplierId: string;
  expectedObtained: string;
  date: Date;
}) => {
  const newValues: OrderToAdd = {
    supplierId: values.supplierId,
    expectedObtained: parseFloat(values.expectedObtained),
    date: values.date.getTime(),
  };

  return newValues;
};

export const initialValues = {
  supplierId: '',
  expectedObtained: '0',
  date: new Date(),
};

export const validationSchema = yup.object({
  supplierId: yup.string().required('Este campo es requerido'),
  expectedObtained: yup.number().min(0).required('Este campo es requerido'),
  date: yup.date().required('Este campo es requerido'),
});
