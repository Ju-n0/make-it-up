import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import "./cart.scss";
import { actionModifyQuantity, actionDeleteFromCart } from "../../store/ToolkitActions";
import { Navigate } from "react-router-dom";

function Cart() {
  const currentCart = useAppSelector((state) => state.usersReducer.currentCart);
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.usersReducer.isLogged);

  if (!isLogged) {
    return <Navigate to={"/"} />;
  }

  const priceCalculation = (price: number, quantity: number) => {
    return +(price * +quantity).toFixed(2);
  };

  const amountPerLine = currentCart.map((product) => product.quantity * product.price);
  const totalAmount = amountPerLine.reduce((a, b) => a + b, 0);
  return (
    <div className="container">
      <div className="container-cart">
        {isLogged && currentCart.length > 0 ? (
          currentCart.map((product) => (
            <article className="cart-item" key={product.id}>
              <h2 className="cart-item-title">{product.name}</h2>

              <div className="cart-item-content">
                <img
                  className="cart-item-content-img"
                  src={product.image_link}
                  alt={product.name}
                />
                <div className="cart-item-content-desc-details">
                  <p className="cart-item-content-desc"> {product.description.slice(0, 100)}</p>
                  <p className="cart-item-content-initialprice">
                    {`initial price : ${product.price}`} €
                  </p>
                </div>
                <div className="cart-item-content-quantity">
                  <p>Quantity</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    min={0}
                    value={product.quantity}
                    onChange={(e) =>
                      dispatch(
                        actionModifyQuantity({
                          id: product.id,
                          quantity: +e.target.value,
                        })
                      )
                    }
                  />
                  <button
                    className="cart-item-delete"
                    onClick={() => dispatch(actionDeleteFromCart({ id: product.id }))}
                  >
                    delete
                  </button>
                </div>
                <p className="cart-item-content-price">
                  {priceCalculation(product.price, product.quantity)} €
                </p>
              </div>
            </article>
          ))
        ) : (
          <p>Cart is empty</p>
        )}

        {isLogged && currentCart.length > 0 && (
          <p className="cart-total">
            The total amount of your cart is: <span>{totalAmount.toFixed(2)}</span> €
          </p>
        )}
      </div>
    </div>
  );
}

export default Cart;
