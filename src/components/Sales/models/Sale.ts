export interface Sale {
  _id: string;
  product: {
    _id: string;
    name: string;
  };
  client: {
    _id: string;
    name: string;
  };
  quantity: number;
  obtained: number;
  profit: number;
  discount: number;
  type: string;
  date: number;
}
