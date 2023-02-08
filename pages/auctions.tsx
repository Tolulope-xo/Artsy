import React from 'react';
import Auction from '../components/auction';
import Bids from '../components/bids';
import Carousel2 from '../components/carousel2';

const Auctions = () => {
  return (
    <div className='px-[3rem]'>
      <Auction/>
      <Carousel2/>
      <Bids/>
    </div>
  );
}

export default Auctions;
