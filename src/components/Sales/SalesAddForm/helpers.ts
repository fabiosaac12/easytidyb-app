import * as yup from 'yup';
import { SaleToAdd } from '../models/SaleToAdd';
import { FormValues } from './models/FormValues';

export const transformNumber = (value: number) =>
  isNaN(value) ? '0' : `${Math.round((value + Number.EPSILON) * 100) / 100}`;

export const initialValues: FormValues = {
  clientId: '',
  date: new Date(),
  type: 'retail',
  products: [],
  obtained: '',
  profit: '',
  discount: '',
};

export const validationSchema = yup.object({
  clientId: yup.string().required('Este campo es requerido'),
  date: yup.date().required('Este campo es requerido'),
  type: yup.string().required('Este campo es requerido'),
  products: yup.array(
    yup.object({
      productId: yup.string().required('Este campo es requerido'),
      quantity: yup
        .number()
        .min(0, 'Minimo 0')
        .required('Este campo es requerido'),
      obtained: yup
        .number()
        .min(0, 'Minimo 0')
        .required('Este campo es requerido'),
      profit: yup
        .number()
        .min(0, 'Minimo 0')
        .required('Este campo es requerido'),
      discount: yup.number().required('Este campo es requerido'),
    }),
  ),
  obtained: yup.number().min(0, 'Minimo 0').required('Este campo es requerido'),
  profit: yup.number().min(0, 'Minimo 0').required('Este campo es requerido'),
  discount: yup.number().required('Este campo es requerido'),
});

export const mapValues = (values: FormValues): SaleToAdd => ({
  clientId: values.clientId,
  date: values.date.getTime(),
  type: values.type,
  products: values.products,
  obtained: +values.obtained,
  profit: +values.profit,
  discount: +values.discount,
});
