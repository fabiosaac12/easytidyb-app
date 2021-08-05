import { transformNumber } from '../helpers';

export const calculateObtainedByDiscount = (
  initialObtained: number,
  discount: number,
) => `${transformNumber(initialObtained - initialObtained * (discount / 100))}`;

export const calculateDiscountByObtained = (
  initialObtained: number,
  obtained: number,
) => `${transformNumber(100 - (obtained * 100) / initialObtained)}`;

export const calculateProfit = (
  initialObtained: number,
  obtained: number,
  initialProfit: number,
) => {
  const difference = initialObtained - obtained;

  const profit = initialProfit - difference;

  return `${transformNumber(profit)}`;
};
