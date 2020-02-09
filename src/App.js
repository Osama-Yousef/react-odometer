import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Odometer from './Odometer';

function App() {
  return (
    <>
      <Header greeting='Hello'/>
      <Odometer/>
      <Footer trademark='Copyright Aaron 2020'/>
    </>
  );
}

export default App;
