import React from 'react';

import './CartItem.css';

import { Button } from '../button/Button';

const CartItem = ({ item, onAdd, onRemove }) => {
  const subTotal = item.price * item.qty;

  return (
    <div className="cart-items-card">
      <div className="cart-flex">
        <div className="card-img">
          <img src={item.img} alt={item.img} />
        </div>

        <div>
          <div className="card-details">
            <div className="title">{item.title}</div>
            <div className="price">
              <p>₦{subTotal}</p>
            </div>
          </div>

          <div className="cart-qty">
            <Button onClick={() => onRemove(item)} buttonSize="btn--small">
              -
            </Button>
            <Button buttonSize="btn--small">{item.qty}</Button>
            <Button onClick={() => onAdd(item)} buttonSize="btn--small">
              +
            </Button>
          </div>
        </div>
      </div>

      <div className="cart-btn">
        <Button
          onClick={() => onRemove(item)}
          buttonStyle="btn--outline--color"
          buttonSize="btn--small"
        >
          remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
