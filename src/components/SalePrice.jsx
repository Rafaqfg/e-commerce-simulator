import React from 'react';


function SalePrice (props) {
  const productPrice = props.productPrice;
  
  const superSale = {
    discount: 10 * (Math.floor((Math.random() * 5) + 1)),
    discountGenerator: (productPrice) => {
      const percent = (productPrice/100) * superSale.discount;
      return parseFloat(productPrice - percent).toFixed(2);
    },
  };

  return(
    <div className="sale-price">
      <p>{`Save ${superSale.discount}%`}</p>
      <p>{`$ ${superSale.discountGenerator(productPrice)}`}</p>
    </div>
  )
}

export default SalePrice;