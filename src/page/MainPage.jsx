import React, { useEffect, useContext } from 'react';
import MyContext from '../myContext/MyContext';
import fetchProducts from '../services/api';
import ProductCard from '../components/ProductCard';
import '../styles/general.css';

function MainPage() {

  const { productsList, setProductsList } = useContext(MyContext);

  useEffect( () => {
    const getProducts = async () => {
      const getProductsList = await fetchProducts();
      setProductsList(getProductsList.results);
    };
    getProducts();
  }, []);
  
  return (
    <div className="home-container">
      <ul className="product-container">
        {productsList.map((item) => (
          <ProductCard
            key={ item.id }
            productDetails={ item }
          />

        ))}
      </ul>
    </div>
  )
}

export default MainPage;