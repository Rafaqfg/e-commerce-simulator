import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [productsList, setProductsList] = useState([]);
  const [range, setRange] = useState({
    min: 0,
    max: 10000,
  });
 
  const ContextObject = {
    productsList,
    setProductsList,
    range,
    setRange,
  };

  return (
    <MyContext.Provider value={ ContextObject }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;