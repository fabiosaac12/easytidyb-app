import * as yup from 'yup';
import { SaleProduct } from '../../../models/SaleProduct';
import { FormValues } from './models/FormValues';

export const initialValues = {
  productId: '',
  quantity: '',
  obtained: '',
  profit: '',
  discount: '',
};

export const validationSchema = yup.object({
  productId: yup.string().required('Es requerido'),
  quantity: yup.number().min(1, 'Minimo 1').required('Es requerido'),
  obtained: yup.number().min(0, 'Minimo 0').required('Es requerido'),
  profit: yup.number().min(0, 'Minimo 0').required('Es requerido'),
});

export const mapValues = (values: FormValues): SaleProduct => ({
  ...values,
  quantity: +values.quantity,
  obtained: +values.obtained,
  profit: +values.profit,
  discount: +values.discount,
});

export const counterMapValues = (product: SaleProduct): FormValues => ({
  ...product,
  quantity: `${product.quantity}`,
  obtained: `${product.obtained}`,
  profit: `${product.profit}`,
  discount: `${product.discount}`,
});
