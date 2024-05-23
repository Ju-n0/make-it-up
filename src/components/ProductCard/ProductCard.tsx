import { Link } from "react-router-dom";
import { Product } from "../../@types/Product";
import "./productCard.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { actionAddToCart } from "../../store/ToolkitActions";

interface CardProps {
  product: Product;
}

function ProductCard({ product }: CardProps) {
  const dispatch = useAppDispatch();
  const currentCart = useAppSelector((state) => state.usersReducer.currentCart);
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
          See details
        </Link>
        <Link to={product.product_link} className="card-link card-link-bottom">
          View official website
        </Link>
        <button
          className="add-to-cart"
          onClick={() => {
            dispatch(actionAddToCart({ product: product } as CardProps));
            console.log(currentCart);
          }}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
