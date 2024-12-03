import { useQuery } from "@tanstack/react-query";
import Card from "../Card/Card";
import style from "./homestyle.module.scss";
import HeroSection from "../Hero/Hero";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Home = () => {
  const { data, error, isLoading } = useQuery(["products"], fetchProducts);

  if (isLoading) return <div className={`${style.loading}`}>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className={style.container}>
        <HeroSection />
        <h1 className={style.title}>Products</h1>
        <div className={style.products}>
          {data.map((product) => (
            <div className={style["products-item"]} key={product.id}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
