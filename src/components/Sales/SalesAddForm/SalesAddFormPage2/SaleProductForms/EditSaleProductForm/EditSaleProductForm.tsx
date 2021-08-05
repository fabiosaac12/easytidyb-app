import { useFormik } from 'formik';
import React from 'react';
import { mapValues, validationSchema } from '../helpers';
import { Select, Button, Input, Text } from '../../../../../Theme';
import { Product } from '../../../../../Products/models/Product';
import { FC } from 'react';
import { FormValues } from '../models/FormValues';
import { useCalculator } from '../hooks/useCalculator';
import { useStyles } from './EditSaleProductFormStyles';
import { SaleProduct } from '../../../../models/SaleProduct';

interface Props {
  initialValues: FormValues;
  product: Product;
  saleType: 'retail' | 'wholesale';
  editSaleProduct: (saleProduct: SaleProduct) => void;
}

export const EditSaleProductForm: FC<Props> = ({
  initialValues,
  product,
  saleType,
  editSaleProduct,
}) => {
  const styles = useStyles();

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const saleProduct = mapValues(values);

      editSaleProduct(saleProduct);
    },
  });

  useCalculator(product, saleType, formik.values, formik.setFieldValue);

  return (
    <>
      <Text style={styles.title}>Nuevo producto</Text>
      <Select
        disabled
        value={formik.values.productId}
        setValue={formik.setFieldValue.bind(null, 'productId')}
        data={[
          {
            label: `${product.name} ${product.char1} ${product.char2}`,
            extra: `${product.initialStock}`,
            value: product._id,
          },
        ]}
        placeholder="Selecciona un producto"
        label="Producto"
      />
      <Input
        keyboardType="numeric"
        placeholder="Escribe el numero de unidades"
        label="Cantidad"
        onChangeText={(value) =>
          +value > product.initialStock
            ? formik.setFieldValue('quantity', `${product.initialStock}`)
            : isNaN(+value) || +value < 0
            ? formik.setFieldValue('quantity', '0')
            : value.length > 1 && value.startsWith('0')
            ? formik.setFieldValue('quantity', value.substring(1))
            : !value.length
            ? formik.setFieldValue('quantity', '0')
            : formik.setFieldValue('quantity', value)
        }
        value={formik.values.quantity || '0'}
      />
      <Input
        keyboardType="numeric"
        placeholder="Escribe el dinero obtenido"
        label="Dinero obtenido"
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
        placeholder="Escribe la ganancia"
        label="Ganancia"
        disabled
        onChangeText={formik.setFieldValue.bind(null, 'profit')}
        value={formik.values.profit || '0'}
      />
      <Input
        keyboardType="numeric"
        placeholder="Escribe el descuento"
        label="Descuento"
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
      <Button title="Agregar" color="primary" onPress={formik.handleSubmit} />
    </>
  );
};
