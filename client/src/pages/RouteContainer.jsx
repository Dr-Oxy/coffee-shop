import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartContext } from '../context/cartContext';

//Import Pages
import Home from './home/Home';
import Menu from './menu/Menu';
import Cart from './cart/Cart';

//Import component
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const RouteContainer = () => {
  const { cart, setCart } = useContext(CartContext);

  //add item to cart
  const onAdd = (product) => {
    //checks if the product already exist in the cart
    const itemExist = cart.find((x) => x.id === product.id);

    //If product exists in cart
    if (itemExist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...itemExist, qty: itemExist.qty + 1 } : x,
        ),
      );
    } else {
      //if product doesn't exist in cart, add to cart
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  //Remove item from cart
  const onRemove = (product) => {
    const itemExist = cart.find((x) => x.id === product.id);

    if (itemExist.qty === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...itemExist, qty: itemExist.qty - 1 } : x,
        ),
      );
    }
  };

  return (
    <BrowserRouter>
      <div className="route-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home onAdd={onAdd} />} />
          <Route exact path="/menu" element={<Menu onAdd={onAdd} />} />
          <Route
            exact
            path="/cart"
            element={<Cart onAdd={onAdd} onRemove={onRemove} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default RouteContainer;
