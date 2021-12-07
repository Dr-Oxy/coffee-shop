import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import { FaShoppingCart } from 'react-icons/fa';

import { CartContext } from '../../context/cartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

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
        <div className="cart-num">{cart.length}</div>
      </ul>
    </header>
  );
};

export default Header;
