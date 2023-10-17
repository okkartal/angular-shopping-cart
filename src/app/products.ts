export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Apple Macbook Pro',
    price: 101,
    description: 'Apple Macbook Pro 2019 Intel Proc.'
  },
  {
    id: 2,
    name: 'iPhone 13 Pro max',
    price: 102,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'DELL Laptop',
    price: 103,
    description: ''
  }
];
