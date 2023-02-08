import React from 'react';
import Container from '../components/container';
import Creators from '../components/creators';
import Newsletter from '../components/newsletter';
import Products from '../components/products';
import Upcoming from '../components/upcoming';

const Home = () => {
  return (
    <div>
      <Container/>
      <Products/>
      <Upcoming/>
      <Creators/>
      <Newsletter/>
    </div>
  );
}

export default Home;
