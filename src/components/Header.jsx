import React from 'react';
import './Header.css';

const Header = ({ cartCount, toggleCart }) => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src="/logo_2.jpg" width="40px" />
            <span>Lemonade</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">Location</a></li>
            <li><a href="#about">Contact</a></li>
          </ul>
          <div className="cart-icon" onClick={toggleCart}>
            <i className="fas fa-shopping-basket fa-lg"></i>
            <div className="cart-badge" id="cart-count">{cartCount}</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
