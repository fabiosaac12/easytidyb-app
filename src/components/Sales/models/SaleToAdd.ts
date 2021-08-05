import { SaleProduct } from './SaleProduct';

export interface SaleToAdd {
  clientId: string;
  date: number;
  type: string;
  products: SaleProduct[];
  obtained: number;
  profit: number;
  discount: number;
}
