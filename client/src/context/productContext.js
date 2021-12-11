import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products] = useState([
    {
      id: '1',
      title: 'Americano',
      price: '500',
      unit: 'per/cup',
      img: '/images/americano.png',
      isFave: false,
    },
    {
      id: '2',
      title: 'Cappuccino',
      price: '800',
      unit: 'per/cup',
      img: '/images/cappuccino.png',
      isFave: true,
    },
    {
      id: '3',
      title: 'Espresso',
      price: '550',
      unit: 'per/cup',
      img: '/images/expresso.png',
      isFave: false,
    },
    {
      id: '4',
      title: 'Latte',
      price: '800',
      unit: 'per/cup',
      img: '/images/latte.png',
      isFave: true,
    },
    {
      id: '5',
      title: 'Macchiato',
      price: '700',
      unit: 'per/cup',
      img: '/images/macchiato.png',
      isFave: false,
    },
    {
      id: '6',
      title: 'Iced Cold Brew',
      price: '600',
      unit: 'per/cup',
      img: '/images/iced_cold_brew.png',
      isFave: true,
    },
    {
      id: '7',
      title: 'Frappuccino',
      price: '1150',
      unit: 'per/cup',
      img: '/images/frappuccino.png',
      isFave: true,
    },
    {
      id: '8',
      title: 'Caffé Mocha',
      price: '1250',
      unit: 'per/cup',
      img: '/images/caffe-mocha.png',
      isFave: true,
    },
    {
      id: '9',
      title: 'Black Eye',
      price: '450',
      unit: 'per/cup',
      img: '/images/expresso.png',
      isFave: false,
    },
  ]);

  const [isShown, setIsShown] = useState(false);
  return (
    <ProductContext.Provider value={{ products, isShown, setIsShown }}>
      {props.children}
    </ProductContext.Provider>
  );
};
