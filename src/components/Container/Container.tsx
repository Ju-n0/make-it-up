import { Product } from "../../@types/Product";
import ProductCard from "../ProductCard/ProductCard";

import "./container.scss";

interface ContainerProps {
  products: Product[];
}

function Container({ products }: ContainerProps) {
  return (
    <section className="container">
      {products && (
        <div className="container-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Container;
