import './Product.css';

import React, { useContext, useState } from 'react';

import { Button } from '../button/Button';
import { CartContext } from '../../context/cartContext';
import { FaStar } from 'react-icons/fa';

const Product = ({ product }) => {
  const { onAdd } = useContext(CartContext);
  const [currProductId, setCurrProductId] = useState(null);

  const displayOverlay = (id) => {
    setCurrProductId(id);
    setTimeout(() => {
      setCurrProductId(null);
    }, 1000);
  };

  return (
    <div className="product-card animate__animated animate__bounceInLeft">
      <div className="card-img">
        <img src={product.img} alt={product.title} />
      </div>

      {product.isFave && (
        <div className="fave-star">
          <FaStar />
        </div>
      )}

      <div className="card-details">
        <div className="title">{product.title}</div>
        <div className="price">
          <p>₦{product.price}</p>

          <p>{product.unit}</p>
        </div>
      </div>

      <div className="card-action">
        <Button
          onClick={() => {
            onAdd(product);
            displayOverlay(product.id);
          }}
          buttonSize="btn--small"
        >
          Add to Cart
        </Button>
      </div>

      {currProductId === product.id && (
        <div className="handle-message">
          <h4>Added to cart</h4>
        </div>
      )}
    </div>
  );
};

export default Product;
