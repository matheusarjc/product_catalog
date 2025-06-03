interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes?: string[]; // Adicionado sizes opcional, pois nem todos os produtos têm
}

declare module "*.json" {
  const value: Product[];
  export default value;
}
