import { Order } from '../models/Order';
import { OrderToUpdate } from '../models/OrderToUpdate';

interface formValues {
  _id: string;
  supplierId: string;
  expectedObtained: string;
  date: Date;
}

export const mapValues = (values: formValues) => {
  const newValues: OrderToUpdate = {
    ...values,
    expectedObtained: parseFloat(values.expectedObtained),
    date: values.date.getTime(),
  };

  return newValues;
};

export const counterMapValues = (values: Order) => {
  const newValues: formValues = {
    _id: values._id,
    supplierId: values.supplier._id,
    date: new Date(values.date),
    expectedObtained: values.expectedObtained.toString(),
  };

  return newValues;
};
