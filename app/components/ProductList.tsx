import ProductCard from "~/components/ProductCard";

interface ProductListProps {
  products: Array<{
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
  }>;
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
