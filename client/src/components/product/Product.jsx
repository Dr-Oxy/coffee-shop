import React, { useContext } from 'react';

import { ProductContext } from '../../context/productContext';

import './Product.css';

import { Button } from '../button/Button';
import { FaStar } from 'react-icons/fa';

const Product = ({ product, onAdd }) => {
  const { isShown } = useContext(ProductContext);

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
        <Button onClick={() => onAdd(product)} buttonSize="btn--small">
          Add to Cart
        </Button>
      </div>

      {isShown && (
        <div className="handle-message">
          <h4>Added to cart</h4>
        </div>
      )}
    </div>
  );
};

export default Product;
