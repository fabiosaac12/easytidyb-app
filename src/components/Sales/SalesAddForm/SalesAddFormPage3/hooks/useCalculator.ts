import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { FormValues } from '../../models/FormValues';
import {
  calculateDiscountByObtained,
  calculateObtainedByDiscount,
  calculateProfit,
} from '../helpers';
import { InitialValuesInForm } from '../models/InitialValues';

export const useCalculator = (
  initialValues: InitialValuesInForm | undefined,
) => {
  const [calculated, setCalculated] = useState(true);
  const formik = useFormikContext<FormValues>();

  useEffect(() => {
    if (initialValues) {
      if (calculated) {
        setCalculated(false);
        return;
      }

      const discount = calculateDiscountByObtained(
        +initialValues.obtained,
        +formik.values.obtained,
      );

      const profit = calculateProfit(
        +initialValues.obtained,
        +formik.values.obtained,
        +initialValues.profit,
      );

      formik.setValues({ ...formik.values, profit, discount });

      setCalculated(true);
    }
  }, [formik.values.obtained]);

  useEffect(() => {
    if (initialValues) {
      if (calculated) {
        setCalculated(false);
        return;
      }

      const obtained = calculateObtainedByDiscount(
        +initialValues.obtained,
        +formik.values.discount,
      );

      const profit = calculateProfit(
        +initialValues.obtained,
        +obtained,
        +initialValues.profit,
      );

      formik.setValues({ ...formik.values, obtained, profit });

      setCalculated(true);
    }
  }, [formik.values.discount]);
};
