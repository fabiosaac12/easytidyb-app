export interface Product {
  _id: string;
  order: {
    _id: string;
  };
  name: string;
  char1: string;
  char2: string;
  initialStock: number;
  retailPrice: number;
  wholesalePrice: number;
  purchasePrice: number;
}
