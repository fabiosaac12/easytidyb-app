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
