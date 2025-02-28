export type ProductProps = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export type ProductListProps = {
  products: ProductProps[];
};
