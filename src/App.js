import React from 'react';
import MyProvider from './myContext/MyProvider';
import HomePage from './page/HomePage';
import MainPage from './page/MainPage';

function App() {
  return (
    <MyProvider>
      <HomePage />
    </MyProvider>
  );
}

export default App;
