import React, { useContext } from "react";
import CartCard from "../CartCard/CartCard";
import CartContext from "../cartContext/CartContext";
import style  from "./cart.module.scss";
const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={style.cart}>
      <h1 className={style["cart-header"]}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className={style["cart-empty"]}>Your cart is empty</p>
      ) : (
        <div className={style["cart-content"]}>
          {cartItems.map((item) => (
            <CartCard key={item.id} product={item} />
          ))}

          <div className={style["cart-summary"]}>
            <div className={style["cart-summary-row"]}>
              <span className={style["cart-summary-row-label"]}>Total</span>
              <span className={style["cart-summary-row-total"]}>
                $
                {cartItems
                  .reduce((total, item) => total + item.price * item.count, 0)
                  .toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
