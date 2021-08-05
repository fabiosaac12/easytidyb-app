import { Product } from '../../../Products/models/Product';
import { transformNumber } from '../helpers';

export const calculateByDiscount = (
  quantity: number,
  discount: number,
  product: Product,
  type: 'retail' | 'wholesale',
) => {
  const expectedObtained =
    quantity * product[type === 'retail' ? 'retailPrice' : 'wholesalePrice'];

  const obtained = expectedObtained - expectedObtained * (discount / 100);
  const profit = obtained - quantity * product.purchasePrice;

  return {
    quantity: transformNumber(quantity),
    obtained: transformNumber(obtained),
    profit: transformNumber(profit),
    discount: transformNumber(discount),
  };
};

export const calculateByQuantity = (
  quantity: number,
  discount: number,
  product: Product,
  type: 'retail' | 'wholesale',
) => {
  const newQuantity =
    quantity > product.initialStock ? product.initialStock : quantity;

  return calculateByDiscount(newQuantity, discount, product, type);
};

export const calculateByObtained = (
  quantity: number,
  obtained: number,
  product: Product,
  type: 'retail' | 'wholesale',
) => {
  const expectedObtained =
    quantity * product[type === 'retail' ? 'retailPrice' : 'wholesalePrice'];

  const profit = obtained - quantity * product.purchasePrice;
  const discount = 100 - (obtained * 100) / expectedObtained;

  return {
    quantity: transformNumber(quantity),
    obtained: transformNumber(obtained),
    profit: transformNumber(profit),
    discount: transformNumber(discount),
  };
};
