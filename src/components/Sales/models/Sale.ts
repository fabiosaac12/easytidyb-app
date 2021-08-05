import { SaleProduct } from './SaleProduct';

export interface Sale {
  _id: string;
  clientId: string;
  date: number;
  type: 'retail' | 'wholesale';
  products: SaleProduct[];
  obtained: number;
  profit: number;
  discount: number;
}
