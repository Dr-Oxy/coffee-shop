import React from 'react';

import './CartItem.css';

import { Button } from '../button/Button';

const CartItem = ({ item, onAdd, onRemove, delProduct }) => {
  const subTotal = item.price * item.qty;

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
