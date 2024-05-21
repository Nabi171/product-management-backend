export type Variant = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Variant[];
  inventory: Inventory;
};

export interface Order {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}
