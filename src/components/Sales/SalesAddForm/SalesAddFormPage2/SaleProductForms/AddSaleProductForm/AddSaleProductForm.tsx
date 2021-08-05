import { useFormik } from 'formik';
import React from 'react';
import { initialValues, mapValues, validationSchema } from './../helpers';
import { useProducts } from '../../../../../Products';
import { Select, Button, Input, Text } from '../../../../../Theme';
import { useEffect } from 'react';
import { useState } from 'react';
import { Product } from '../../../../../Products/models/Product';
import { FC } from 'react';
import { FormValues } from './../models/FormValues';
import { useCalculator } from './../hooks/useCalculator';
import { useStyles } from './AddSaleProductFormStyles';
import { useModal } from '../../../../../Modal';
import { useSnackbar } from '../../../../../Snackbar';
import { SaleProduct } from '../../../../models/SaleProduct';

interface Props {
  saleType: 'retail' | 'wholesale';
  addSaleProduct: (saleProduct: SaleProduct) => void;
  addedProducts: string[];
}

export const AddSaleProductForm: FC<Props> = ({
  saleType,
  addSaleProduct,
  addedProducts,
}) => {
  const styles = useStyles();
  const modal = useModal();
  const snackbar = useSnackbar();
  const products = useProducts();
  const [availableProducts, setAvailableProducts] = useState<Product[]>();
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const saleProduct = mapValues(values);

      addSaleProduct(saleProduct);
    },
  });

  useEffect(() => {
    const availableProducts = products.data?.filter(
      (product) =>
        !addedProducts.includes(product._id) && !!product.initialStock,
    );

    if (availableProducts?.length) {
      setAvailableProducts(availableProducts);
    } else {
      modal.handleHide();
      snackbar.handleShow('No quedan productos disponibles', 'info');
    }
  }, [addedProducts]);

  useEffect(() => {
    if (selectedProduct?._id !== formik.values.productId) {
      const newSelectedProduct = products.data?.find(
        (product) => product._id === formik.values.productId,
      );

      if (newSelectedProduct) {
        setSelectedProduct(newSelectedProduct);
        formik.setFieldValue('quantity', '1');
      }
    }
  }, [formik.values.productId]);

  useCalculator(selectedProduct, saleType, formik.values, formik.setFieldValue);

  return (
    <>
      <Text style={styles.title}>Nuevo producto de la venta</Text>
      {availableProducts && (
        <Select
          value={formik.values.productId}
          setValue={formik.setFieldValue.bind(null, 'productId')}
          data={availableProducts.map((product) => ({
            label: `${product.name} ${product.char1} ${product.char2}`,
            extra: `${product.initialStock}`,
            value: product._id,
          }))}
          placeholder="Selecciona un producto"
          label="Producto"
        />
      )}
      <Input
        keyboardType="numeric"
        placeholder="Escribe el numero de unidades"
        label="Cantidad"
        disabled={!selectedProduct}
        onChangeText={(value) =>
          selectedProduct && +value > selectedProduct.initialStock
            ? formik.setFieldValue(
                'quantity',
                `${selectedProduct.initialStock}`,
              )
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
        disabled={!selectedProduct}
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
        disabled={!selectedProduct}
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
