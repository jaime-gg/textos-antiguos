import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function BookItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, description, price, name, quantity, filter } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });

      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <div className="bookItem">
      <Link to={`/products/${_id}`}>
        <div className="bookBorder">
          <img alt={name} src={`/images/${image}`} />
        </div>
        <div className="info">
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </Link>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}