import { Link } from "react-router-dom";
import { Product } from "../../@types/Product";
import "./productCard.scss";

interface CardProps {
  product: Product;
}

function ProductCard({ product }: CardProps) {
  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="card-link">
        <h2 className="card-title">{product.name}</h2>
      </Link>

      <div className="card-content">
        <img className="card-img" src={product.image_link} alt={product.name} />

        <p className="card-desc"> {product.description.slice(0, 100)}</p>

        <p className="card-price">{product.price} €</p>
        <Link to={`/product/${product.id}`} className="card-link card-link-bottom">
          Voir le détail
        </Link>
        <Link to={product.product_link} className="card-link card-link-bottom">
          Voir le site officiel
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
