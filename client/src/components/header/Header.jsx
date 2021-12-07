import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="logo">TasteBud</div>

      <ul>
        <nav className="nav-bar">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
          <li className="cart-link">
            <Link className="nav-link" to="/cart">
              <FaShoppingCart />
            </Link>
          </li>
        </nav>
        <div className="cart-num">3</div>
      </ul>
    </header>
  );
};

export default Header;
