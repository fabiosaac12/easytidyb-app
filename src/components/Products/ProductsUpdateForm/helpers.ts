import * as yup from 'yup';
import { ProductToUpdate } from '../models/ProductToUpdate';
import { Product } from '../models/Product';

interface FormValues {
  _id: string;
  orderId: string;
  name: string;
  char1: string;
  char2: string;
  initialStock: string;
  retailPrice: string;
  wholesalePrice: string;
  purchasePrice: string;
}

export const initialValues = {
  orderId: '',
  name: '',
  char1: '',
  char2: '',
  initialStock: '0',
  retailPrice: '0',
  wholesalePrice: '0',
  purchasePrice: '0',
};

export const validationSchema = yup.object({
  orderId: yup.string().required('Este campo es requerido'),
  name: yup.string().required('Este campo es requerido'),
  char1: yup.string(),
  char2: yup.string(),
  initialStock: yup
    .number()
    .min(0, 'Minimo 0')
    .required('Este campo es requerido'),
  retailPrice: yup
    .number()
    .min(0, 'Minimo 0')
    .required('Este campo es requerido'),
  wholesalePrice: yup
    .number()
    .min(0, 'Minimo 0')
    .required('Este campo es requerido'),
  purchasePrice: yup
    .number()
    .min(0, 'Minimo 0')
    .required('Este campo es requerido'),
});

export const mapValues = (values: FormValues) => {
  const newValues: ProductToUpdate = {
    _id: values._id,
    orderId: values.orderId,
    name: values.name,
    char1: values.char1,
    char2: values.char2,
    initialStock: +values.initialStock,
    retailPrice: +values.retailPrice,
    wholesalePrice: +values.wholesalePrice,
    purchasePrice: +values.purchasePrice,
  };

  return newValues;
};

export const counterMapValues = (values: Product) => {
  const newValues: FormValues = {
    ...values,
    orderId: values.order._id,
    initialStock: `${values.initialStock}`,
    retailPrice: `${values.retailPrice}`,
    wholesalePrice: `${values.wholesalePrice}`,
    purchasePrice: `${values.purchasePrice}`,
  };

  return newValues;
};
