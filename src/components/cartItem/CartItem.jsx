import React, { useContext } from 'react';

import './CartItem.css';

import { Button } from '../button/Button';
import { CartContext } from '../../context/cartContext';

const CartItem = ({ item }) => {
  const subTotal = item.price * item.qty;

  const { onAdd, onRemove, delProduct } = useContext(CartContext);

  return (
    <div className="cart-items-card">
      <div className="cart-flex">
        <div className="card-details">
          <div className="card-img">
            <img src={item.img} alt={item.img} />
          </div>

          <div className="title">{item.title}</div>
        </div>

        <div className="cart-qty">
          <Button
            buttonStyle="btn--outline--color"
            onClick={() => onRemove(item)}
            buttonSize="btn--small"
          >
            -
          </Button>

          <Button buttonStyle="btn--outline--color" buttonSize="btn--small">
            {item.qty}
          </Button>

          <Button
            buttonStyle="btn--outline--color"
            onClick={() => onAdd(item)}
            buttonSize="btn--small"
          >
            +
          </Button>
        </div>

        <div className="price">
          <p>₦{subTotal}</p>
        </div>

        <Button
          onClick={() => delProduct(item)}
          buttonStyle="btn--secondary--color"
          buttonSize="btn--small"
        >
          remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
