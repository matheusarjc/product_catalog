export default function FilterSidebar() {
  return (
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
  );
}
