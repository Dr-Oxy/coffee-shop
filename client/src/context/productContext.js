import React, { createContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products] = useState([
    {
      id: '1',
      title: 'Americano',
      price: '500',
      unit: 'per/cup',
      img: '/images/americano.png',
    },
    {
      id: '2',
      title: 'Cappuccino',
      price: '750',
      unit: 'per/cup',
      img: '/images/cappuccino.png',
    },
    {
      id: '3',
      title: 'Espresso',
      price: '400',
      unit: 'per/cup',
      img: '/images/espresso.png',
    },
    {
      id: '4',
      title: 'Latte',
      price: '800',
      unit: 'per/cup',
      img: '/images/latte.png',
    },
    {
      id: '5',
      title: 'Macchiato',
      price: '600',
      unit: 'per/cup',
      img: '/images/macchiato.png',
    },
    {
      id: '6',
      title: 'Iced Cold Brew',
      price: '650',
      unit: 'per/cup',
      img: '/images/iced_cold_brew.png',
    },
    {
      id: '7',
      title: 'Frappuccino',
      price: '700',
      unit: 'per/cup',
      img: '/images/frappuccino.png',
    },
    {
      id: '8',
      title: 'Caffé Mocha',
      price: '1000',
      unit: 'per/cup',
      img: '/images/caffe-mocha.png',
    },
  ]);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};
