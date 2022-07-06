import React from 'react';
import FilterPrice from '../components/FilterPrice';
import MainPage from './MainPage';

function HomePage () {

  return(
    <div className="home-container">
      <FilterPrice />
      <MainPage />
    </div>
  )
}

export default HomePage;