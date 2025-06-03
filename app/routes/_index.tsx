import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Header from "~/components/Header";
import Banner from "~/components/Banner";
// import ProductCatalog from "~/components/ProductCatalog"; // Removido
import Footer from "~/components/Footer";
import ProductList from "~/components/ProductList";
import FilterSidebar from "~/components/FilterSidebar";

import products from "/data/products.json";

export const meta: MetaFunction = () => {
  return [{ title: "Mini Product Catalog" }];
};

export const loader = async () => {
  // No futuro, aqui seria a lógica para buscar dados de uma API ou banco de dados
  return json({ products });
};

export default function Index() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <Header />
      <Banner />
      {/* Conteúdo principal com filtros e lista de produtos */}
      <div className="container mx-auto my-8 px-4 flex flex-col md:flex-row gap-8">
        <FilterSidebar />
        <div className="w-full md:w-3/4">
          {/* Filtros Aplicados e Ordenação - Placeholder */}
          <div className="flex justify-between items-center mb-4">
            <div>Showing {products.length} results</div>
            <div>Applied Filters: {/* Placeholder */}</div>
            <div>
              Sort by:
              <select className="ml-2 border rounded px-2 py-1">
                <option>Popularity</option>
              </select>
            </div>
          </div>
          <ProductList products={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
