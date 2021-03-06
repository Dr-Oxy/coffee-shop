import React, { useContext } from 'react';

import { ProductContext } from '../../context/productContext';

import './Menu.css';

import Product from '../../components/product/Product';

const Menu = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="menu">
      <h1>Our Exciting Menu</h1>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        deleniti? Libero deleniti voluptatem eos fugiat magnam expedita
        perferendis.
      </p>
      <div className="all-menu-wrap">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
