import React from 'react';

const Auction = () => {
  return (
    <div>
       <div className='flex items-center h-[5rem] m-auto'>
        <a className='font-[Satoshi] text-[20px]  font-[500] leading-[40px]' href='/home'>Home/</a>
        <a className='font-[Satoshi] text-[20px]  font-[500] leading-[40px]' href='/auctions'>Auctions</a>
      </div>
      <p className='font-[Satoshi] font-[500] text-[25px] leading-[30px]'>Here’s an overview of products actively on auction, explore!</p>
    </div>
  );
}

export default Auction;
