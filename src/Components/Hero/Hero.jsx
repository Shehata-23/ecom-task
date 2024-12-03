import React from "react";
import styles from "./heroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Our Store</h1>
        <p className={styles.subtitle}>
          Discover a variety of products at unbeatable prices!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
