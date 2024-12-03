import React, { useContext } from "react";
import CartContext from "../cartContext/CartContext";
import styles from "./cartButton.module.scss";

const CartButton = ({ product }) => {
  const { id } = product;
  const { isProductInCart, addToCart, removeFromCart } = useContext(CartContext);

  const productInCart = isProductInCart(id);

  const handleCartAction = () => {
    if (productInCart) {
      removeFromCart(id);
    } else {
      addToCart(product);
    }
  };

  return (
    <button
      onClick={handleCartAction}
      className={`${styles.cartButton} ${
        productInCart ? styles.inCart : styles.notInCart
      }`}
    >
      {productInCart ? "Remove from cart" : "Add to cart"}
    </button>
  );
};

export default CartButton;
