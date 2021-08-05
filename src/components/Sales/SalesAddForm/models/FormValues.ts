import { SaleProduct } from '../../models/SaleProduct';

export interface FormValues {
  clientId: string;
  date: Date;
  type: 'retail' | 'wholesale';
  products: SaleProduct[];
  obtained: string;
  profit: string;
  discount: string;
}
