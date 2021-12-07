import React from 'react';
import './Product.css';

import { Button } from '../button/Button';
import { FaStar } from 'react-icons/fa';

const Product = ({ product }) => {
  return (
    <div className="product-card">
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
        <Button buttonSize="btn--small">Add to Cart</Button>
      </div>
    </div>
  );
};

export default Product;
