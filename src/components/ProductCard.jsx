import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <img
          src={ productImg }
          alt={ productTitle }
        />
        <p>{ productTitle }</p>
        <p>{`R$ ${productPrice}`}</p>

        { freeShipping
              && (<span>Frete Grátis</span>)}

       
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
