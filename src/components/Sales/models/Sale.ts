export interface Sale {
  _id: string;
  productId: string;
  clientId: string;
  quantity: number;
  obtained: number;
  profit: number;
  discount: number;
  type: string;
  date: number;
}
