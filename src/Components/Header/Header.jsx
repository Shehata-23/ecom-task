import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import CartContext from "../cartContext/CartContext";
import styles from "./home.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      
      <nav className={styles.largeNav}>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.cartNavItem}>
            <Link to="/cart">
              <div className={styles.cartIconContainer}>
                <ShoppingCart size={24} />
                {cartItems.length > 0 && (
                  <span className={styles.cartBadge}>{cartItems.length}</span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div 
        className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ''}`} 
        onClick={toggleMenu}
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      
      {isMenuOpen && (
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavLinks}>
            <li>
              <Link to="/" className={styles.mobileNavLink} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className={styles.mobileNavLink} onClick={toggleMenu}>
                <div className={styles.cartIconContainer}>
                  <ShoppingCart size={24} />
                  {cartItems.length > 0 && (
                    <span className={styles.cartBadge}>{cartItems.length}</span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;