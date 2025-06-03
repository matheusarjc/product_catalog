export default function ProductCatalog() {
  return (
    <div className="container mx-auto my-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Seção de Filtros */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Filter Products</h3>
          {/* Categoria */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Category</h4>
            {/* Placeholder para opções de categoria */}
            <ul>
              <li className="flex justify-between items-center">
                Man Fashion <span>▼</span>
              </li>
              {/* Adicionar subcategorias depois */}
            </ul>
          </div>
          {/* Preço */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Price</h4>
            {/* Placeholder para slider de preço */}
            <div>From $100 To $500</div>
          </div>
          {/* Tamanho */}
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Size</h4>
            {/* Placeholder para opções de tamanho */}
            <div>
              <label className="inline-flex items-center mr-4">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">4XL</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">L</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">M</span>
              </label>
            </div>
          </div>
        </div>

        {/* Seção de Produtos */}
        <div className="w-full md:w-3/4">
          {/* Filtros Aplicados e Ordenação */}
          <div className="flex justify-between  ">
            <div className="flex flex-col justify-between  mb-4">
              <div>
                <span>Showing 12 results from total 12 for &quot;Jacket & Coats&quot;</span>
              </div>
              <div>
                Applied Filters:{" "}
                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full mr-2">
                  JACKET & COATS X
                </span>{" "}
                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full mr-2">
                  $100 - $500 X
                </span>{" "}
                <span className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  SIZE L X
                </span>
              </div>
            </div>
            <div>
              Sort by:
              <select className="ml-2 border rounded px-2 py-1">
                <option>Popularity</option>
              </select>
            </div>
          </div>

          {/* Grade de Produtos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder para produtos */}
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="/app/assets/jacket-placeholder.png"
                  alt="Jacket"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h5 className="text-md font-semibold">JACKET OTTMAN TEST</h5>
                  <p className="text-gray-700 mt-2">$100</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
