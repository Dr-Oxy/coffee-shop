import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

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

  const delProduct = (product) => {
    const itemExist = cart.find((x) => x.id === product.id);

    if (itemExist) {
      setCart(cart.filter((x) => x.id !== product.id));
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, onAdd, onRemove, delProduct }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
