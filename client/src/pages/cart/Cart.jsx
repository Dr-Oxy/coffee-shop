import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cartContext';

import './Cart.css';

import CartItem from '../../components/cartItem/CartItem';
import { Button } from '../../components/button/Button';

const Cart = ({ onAdd, onRemove, delProduct }) => {
  const { cart } = useContext(CartContext);

  //Total cart
  const totalPrice = cart.reduce(
    (price, item) => price + item.qty * item.price,
    0,
  );

  if (cart.length === 0 || cart === null) {
    return (
      <div className="cart-empty">
        <h1>
          Cart <span>({cart.length})</span>
        </h1>

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
              delProduct={delProduct}
            />
          ))}
        </div>

        <hr />
        <div className="tots">
          <h3>Total:</h3>
          <span>₦ {totalPrice}.00</span>
        </div>

        <div className="cart-check-action">
          <Link to="/menu">
            <Button buttonStyle="btn--light--color" buttonSize="btn--medium">
              Back to Menu
            </Button>
          </Link>

          <Button buttonSize="btn--medium">Checkout</Button>
        </div>
      </div>
    );
  }
};

export default Cart;
