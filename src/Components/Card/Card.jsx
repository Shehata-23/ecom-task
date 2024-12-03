import React from "react";
import { Link } from "react-router-dom";
import CartButton from "../CardButton/CartButton"; 
import style from "./card.module.scss";

const Card = ({ product }) => {
  const { id, title, price, category, image, rating } = product;

  return (
    <div className={style.card}>
      <Link to={`/details/${id}`} className={style.imgContainer}>
        <img src={image} alt={title} className={style["card-image"]} />
      </Link>
      <div className={style["card-content"]}>
        <h3 className={style["card-content-title"]}>{title}</h3>
        <p className={style["card-content-category"]}>{category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className={style["card-content-price"]}>${price}</span>
          <span className={style["card-content-rating"]}>
            ⭐ {rating.rate} ({rating.count} reviews)
          </span>
        </div>
        <CartButton product={product} /> 
      </div>
    </div>
  );
};

export default Card;
