import { Heart } from "phosphor-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  // Placeholder para lógica de wishlist depois
  const isWishlisted = false; // Mock

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h5 className="text-md font-semibold">{product.name}</h5>
        <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
        {/* Botão de Wishlist - placeholder */}
        <button
          className={`absolute top-2 right-2 p-2 rounded-full bg-white ${
            isWishlisted ? "text-red-500" : "text-gray-300"
          } hover:text-red-500`}
          aria-label={isWishlisted ? "Remover da Wishlist" : "Adicionar à Wishlist"}>
          <Heart size={20} weight={isWishlisted ? "fill" : "regular"} />
        </button>
      </div>
    </div>
  );
}
