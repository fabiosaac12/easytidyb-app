import { useEffect, useState } from 'react';
import { Product } from '../../../../../Products/models/Product';
import {
  calculateByDiscount,
  calculateByObtained,
  calculateByQuantity,
} from '../../helpers';
import { FormValues } from '../models/FormValues';

export const useCalculator = (
  selectedProduct: Product | undefined,
  saleType: 'retail' | 'wholesale',
  formValues: FormValues,
  setFieldValue: (name: keyof FormValues, value: string) => void,
) => {
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    if (calculated) {
      setCalculated(false);
      return;
    }

    if (selectedProduct) {
      const { quantity, obtained, profit, discount } = formValues;

      const values = calculateByQuantity(
        +quantity,
        +discount,
        selectedProduct,
        saleType,
      );

      quantity !== values.quantity &&
        setFieldValue('quantity', values.quantity);

      obtained !== values.obtained &&
        setFieldValue('obtained', values.obtained);

      profit !== values.profit && setFieldValue('profit', values.profit);

      discount !== values.discount &&
        setFieldValue('discount', values.discount);

      setCalculated(true);
    }
  }, [formValues.quantity, selectedProduct]);

  useEffect(() => {
    if (calculated) {
      setCalculated(false);
      return;
    }

    if (selectedProduct) {
      const { quantity, obtained, profit, discount } = formValues;

      const values = calculateByObtained(
        +quantity,
        +obtained,
        selectedProduct,
        saleType,
      );

      profit !== values.profit && setFieldValue('profit', values.profit);

      discount !== values.discount &&
        setFieldValue('discount', values.discount);

      setCalculated(true);
    }
  }, [formValues.obtained]);

  useEffect(() => {
    if (calculated) {
      setCalculated(false);
      return;
    }

    if (selectedProduct) {
      const { quantity, obtained, profit, discount } = formValues;

      const values = calculateByDiscount(
        +quantity,
        +discount,
        selectedProduct,
        saleType,
      );

      profit !== values.profit && setFieldValue('profit', values.profit);

      obtained !== values.obtained &&
        setFieldValue('obtained', values.obtained);

      setCalculated(true);
    }
  }, [formValues.discount]);
};
