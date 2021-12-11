import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

import { FaShoppingBag } from 'react-icons/fa';

import { CartContext } from '../../context/cartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <div className="logo">
        <p>TasteBud</p>
      </div>

      <nav className="nav-bar">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/menu">
            Menu
          </NavLink>
        </li>
        <li className="cart-link">
          <NavLink activeClassName="active" to="/cart">
            <FaShoppingBag className="shop-bag" />
          </NavLink>

          <div className="cart-num">
            <p>{cart.length}</p>
          </div>
        </li>
      </nav>
    </header>
  );
};

export default Header;
