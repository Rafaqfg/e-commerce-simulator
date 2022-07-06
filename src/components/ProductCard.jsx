import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SalePrice from './SalePrice';

const addToCart = () => {
  window.alert('Great choice! Added to your cart!');
};

class ProductCard extends Component {

  render() {
    const { productDetails } = this.props;
    const { thumbnail: productImg, title: productTitle,
      price: productPrice,
      shipping: { free_shipping: freeShipping } } = productDetails;

    return (
      <li
        className="product-item"
      >
        <a
          href="https://rafaqfg.github.io/portfolio/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={ productImg }
            alt={ productTitle }
          />
          <p>{ productTitle }</p>
        </a>
        <p id={ freeShipping ? "price" : "" }
        >
          {`$ ${productPrice}`}
        </p>

        { freeShipping && <SalePrice productPrice={ productPrice } /> }
        <button
          type="button"
          onClick={ () => addToCart() }
        >
          Add to cart
        </button>
      </li>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = {
  productTitle: PropTypes.string,
  productImg: PropTypes.string,
  productPrice: PropTypes.number,
}.isRequired;
