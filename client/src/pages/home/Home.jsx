import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

import { ProductContext } from '../../context/productContext';

import { Button } from '../../components/button/Button';
import Product from '../../components/product/Product';

const Home = ({ onAdd }) => {
  const { products } = useContext(ProductContext);

  return (
    <div className="home-page">
      <div className="showcase">
        <h1>Welcome to TasteBud Café</h1>
        <p>
          Get a wide variety of coffee options from our delicately crafted menu.
        </p>

        <Link to="/menu">
          <Button buttonStyle="btn--primary--color" buttonSize="btn--medium">
            See Menu
          </Button>
        </Link>
      </div>

      <div className="favourites">
        <h2>Our Favourite Menu</h2>

        <div className="fave-menu-wrap">
          <div className="fave-menu-grid">
            {products.map(
              (product) =>
                product.isFave && (
                  <Product key={product.id} product={product} onAdd={onAdd} />
                ),
            )}
          </div>

          <div className="see-all">
            <Link to="/menu">
              <Button>See All Menu</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
