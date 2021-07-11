export interface Order {
  _id: string;
  supplier: {
    _id: string;
    name: string;
  };
  expectedObtained: number;
  date: number;
}
