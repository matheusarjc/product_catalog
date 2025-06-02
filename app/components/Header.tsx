import { Link } from "@remix-run/react";
import { MagnifyingGlass, Heart, ShoppingCart, User } from "phosphor-react";

export default function Header() {
  return (
    <header className="w-full bg-[#f5f5f5] border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Menu Esquerda */}
        <nav aria-label="Menu principal" className="flex items-center gap-6 text-sm text-gray-700">
          <Link to="/" className="hover:text-black focus:outline-none focus:text-black">
            HOME
          </Link>
          <div className="relative group">
            <button
              className="hover:text-black focus:outline-none focus:text-black flex items-center gap-1"
              aria-haspopup="true"
              aria-expanded="false">
              SHOP <span className="ml-1">▼</span>
            </button>
            {/* Dropdown pode ser implementado depois */}
          </div>
          <Link to="/about" className="hover:text-black focus:outline-none focus:text-black">
            ABOUT
          </Link>
          <Link to="/contact" className="hover:text-black focus:outline-none focus:text-black">
            CONTACT
          </Link>
        </nav>
        {/* Logo Central */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <span className="font-semibold text-lg tracking-widest select-none">✈ TEST</span>
        </div>
        {/* Ícones Direita */}
        <div className="flex items-center gap-6 text-gray-700 text-lg">
          <button
            aria-label="Buscar"
            className="hover:text-black focus:outline-none focus:text-black">
            <MagnifyingGlass size={22} weight="regular" />
          </button>
          <Link
            to="/wishlist"
            aria-label="Minha Wishlist"
            className="hover:text-black focus:outline-none focus:text-black">
            <Heart size={22} weight="regular" />
          </Link>
          <Link
            to="/cart"
            aria-label="Meu Carrinho"
            className="flex items-center gap-1 hover:text-black focus:outline-none focus:text-black border px-2 py-1 rounded-full text-sm">
            MY CART <ShoppingCart size={20} weight="regular" className="ml-1" />
          </Link>
          <Link
            to="/login"
            aria-label="Login"
            className="hover:text-black focus:outline-none focus:text-black">
            <User size={22} weight="regular" />
          </Link>
        </div>
      </div>
    </header>
  );
}
