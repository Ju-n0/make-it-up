import { Link, useParams } from "react-router-dom";
import "./productPage.scss";
import { useAppSelector } from "../../hooks/redux";
import { CornerUpLeft } from "react-feather";

function ProductCard() {
  const params = useParams();
  const searchedId = params.id;
  const products = useAppSelector((state) => state.productsReducer.list);

  const product = products.find((targettedProduct) => {
    return Number(targettedProduct.id) === Number(searchedId);
  });

  if (!product) {
    return null;
  }

  return (
    <article className="productPage">
      <Link to="/" className="productPage-return">
        <CornerUpLeft /> Retour à la page d'accueil
      </Link>

      <h2 className="productPage-title">{product.name}</h2>
      <div className="productPage-content">
        <img className="productPage-img" src={product.image_link} alt={product.name} />

        <p className="productPage-desc"> {product.description}</p>

        <p className="productPage-price">{product.price} €</p>

        <Link to={product.product_link} className="productPage-link">
          Voir le site officiel
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
