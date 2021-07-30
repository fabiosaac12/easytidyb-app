import * as yup from 'yup';
import { SaleToAdd } from '../models/SaleToAdd';

export const initialValues = {
  productId: '',
  clientId: '',
  quantity: '',
  obtained: '',
  profit: '',
  discount: '',
  type: '',
  date: new Date(),
};

export const validationSchema = yup.object({
  productId: yup.string().required('Este campo es requerido'),
  clientId: yup.string().required('Este campo es requerido'),
  quantity: yup.number().min(0, 'Minimo 0').required('Este campo es requerido'),
  obtained: yup.number().min(0, 'Minimo 0').required('Este campo es requerido'),
  profit: yup.number().min(0, 'Minimo 0').required('Este campo es requerido'),
  discount: yup.number().min(0, 'Minimo 0').required('Este campo es requerido'),
  type: yup.string().required('Este campo es requerido'),
  date: yup.date().required('Este campo es requerido'),
});

export const mapValues = (values: {
  productId: string;
  clientId: string;
  quantity: string;
  obtained: string;
  profit: string;
  discount: string;
  type: string;
  date: Date;
}) => {
  const newValues: SaleToAdd = {
    productId: values.productId,
    clientId: values.clientId,
    quantity: +values.quantity,
    obtained: +values.obtained,
    profit: +values.profit,
    discount: +values.discount,
    type: values.type,
    date: values.date.getTime(),
  };

  return newValues;
};
