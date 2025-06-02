import { ShoppingCartIcon, HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Left: Menu */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-600">
          <a href="/home" className="hover:text-black transition">
            Home
          </a>
          <a href="/" className="hover:text-black transition">
            Shop
          </a>
          <a href="/about" className="hover:text-black transition">
            About
          </a>
          <a href="/contact" className="hover:text-black transition">
            Contact
          </a>
        </nav>

        {/* Center: Logo */}
        <div className="text-lg font-bold">+ TEST</div>

        {/* Right: Icons */}
        <div className="flex gap-4 items-center">
          <MagnifyingGlassIcon className="h-5 w-5 cursor-pointer" />
          <HeartIcon className="h-5 w-5 cursor-pointer" />
          <ShoppingCartIcon className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
