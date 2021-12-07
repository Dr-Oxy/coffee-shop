import React, { useContext } from 'react';

import { CartContext } from '../../context/cartContext';

import './Cart.css';

import CartItem from '../../components/cartItem/CartItem';

const Cart = ({ onAdd, onRemove }) => {
  const { cart } = useContext(CartContext);

  //Total cart
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0,
  );

  if (cart.length === 0 || cart === null) {
    return (
      <div className="cart-empty">
        <h1>Cart</h1>

        <p>Your Cart is Empty</p>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <h1>
          Cart (<span>{cart.length})</span>
        </h1>

        <div className="cart-grid">
          {cart.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          ))}
        </div>

        <hr />
        <div className="tots">
          <h3>Total:</h3>
          <span>₦ {totalPrice}</span>
        </div>
      </div>
    );
  }
};

export default Cart;
