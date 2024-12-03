import React, { useContext } from "react";
import CartContext from "../cartContext/CartContext";
import style from "./carCard.module.scss";
import { Link } from "react-router-dom";
const CartCard = ({ product }) => {
  const { removeFromCart, updateItemCount } = useContext(CartContext);

  const { id, title, price, image, category, count } = product;

  const totalPrice = (price * count).toFixed(2);

  return (
    <div className={style.container}>
      <div className={style.leftside}>
        <Link to={`/details/${id}`} className={style.imgContainer}>
          <img src={image} alt={title} className={style.img} />
        </Link>

        <div className={style.text}>
          <h3 className={style["text-title"]}>{title}</h3>
          <p className={style["text-category"]}>{category}</p>

          <div className={style["text-price"]}>
            <span className={style["text-price-label"]}>Price:</span>
            <span className={style["text-price-value"]}>
              ${price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className={style.actions}>
        <div className={style["actions-controls"]}>
          <button
            onClick={() => updateItemCount(id, count - 1)}
            className={style["actions-controls-button"]}
          >
            -
          </button>
          <span className={style["actions-controls-count"]}>{count}</span>
          <button
            onClick={() => updateItemCount(id, count + 1)}
            className={style["actions-controls-button"]}
          >
            +
          </button>
        </div>

        <div className={style["actions-price"]}>
          <div>${totalPrice}</div>
          <button
            onClick={() => removeFromCart(id)}
            className={style["actions-remove"]}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
