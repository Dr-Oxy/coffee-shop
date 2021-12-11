import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Import Pages
import Home from './home/Home';
import Menu from './menu/Menu';
import Cart from './cart/Cart';

//Import component
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const RouteContainer = () => {
  return (
    <BrowserRouter>
      <div className="route-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default RouteContainer;
