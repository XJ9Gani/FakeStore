export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export interface ProductState {
  products: Product[];
  category: string;
  status: string;
}
