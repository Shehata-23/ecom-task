import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CartContext from "../cartContext/CartContext"; 
import styles from "./productDetails.module.scss";
import CartButton from "../CardButton/CartButton";

const fetchProductDetails = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product details.");
  }
  return response.json();
};

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext); 
  const { data: product, isLoading, isError, error } = useQuery(
    ["productDetails", id],
    () => fetchProductDetails(id)
  );

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (isError) {
    return <div className={styles.error}>Error: {error.message}</div>;
  }

  const { title, image, price, description, category } = product;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.category}>Category: {category}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>Price: ${price.toFixed(2)}</p>
        <CartButton product={product} />

      </div>
    </div>
  );
};

export default ProductDetails;
