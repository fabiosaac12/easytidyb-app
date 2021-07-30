import * as yup from 'yup';
import { Order } from '../models/Order';
import { OrderToUpdate } from '../models/OrderToUpdate';

interface FormValues {
  _id: string;
  supplierId: string;
  expectedObtained: string;
  date: Date;
}

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

export const mapValues = (values: FormValues) => {
  const newValues: OrderToUpdate = {
    ...values,
    expectedObtained: parseFloat(values.expectedObtained),
    date: values.date.getTime(),
  };

  return newValues;
};

export const counterMapValues = (values: Order) => {
  const newValues: FormValues = {
    ...values,
    supplierId: values.supplier._id,
    date: new Date(values.date),
    expectedObtained: `${values.expectedObtained}`,
  };

  return newValues;
};
