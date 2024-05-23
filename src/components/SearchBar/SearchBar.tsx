import { useState } from "react";
import { Product } from "../../@types/Product";
import ProductCard from "../ProductCard/ProductCard";

import "./searchBar.scss";

interface SearchBarProps {
  products: Product[];
}

function SearchBar({ products }: searchBarProps) {
  const [inputBarValue, setInputBarValue] = useState("");
  const results = products.filter((product) => {
    return product.name.toLowerCase().includes(inputBarValue.toLowerCase());
  });
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        value={inputBarValue}
        onChange={(e) => setInputBarValue(e.target.value)}
      />
      {products && (
        <div className="search-list">
          {results.map((result) => (
            <ProductCard key={result.id} product={result} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
