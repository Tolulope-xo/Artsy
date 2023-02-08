import React from 'react';
import Image from 'next/image';
import location from '../components/assets/Location.png'
import mail from '../components/assets/Mail.png'

const Footer = () => {
  return (
    <div className='flex flex-col mx-[2rem] md:mx-[6rem] text-center h-[20rem] justify-center m-auto mt-[2rem] '>
      <div className='flex flex-row justify-between items-left md:#333333 '>
        <h2 className="hidden md:block text-[48px] m-[auto] w-100vw text-center font-[600] md:text-left font-[Clash] md:m-0 text-[black]">ARTSY.</h2>
        <div className='hidden md:block text-left'>
          <p className='font-[Satoshi] font-[400] text-[20px] leading-[40.1px]'>Home</p>
          <p className='font-[Satoshi] font-[400] text-[20px] leading-[40.1px]'>Marketplace</p>
          <p className='font-[Satoshi] font-[400] text-[20px] leading-[40.1px]'>Auctions</p>
          <p className='font-[Satoshi] font-[400] text-[20px] leading-[40.1px]'>Drops</p>
        </div>
        <div className='hidden md:block text-left'>
          <p className='font-[Satoshi] font-[400] text-[20px] leading-[40.1px]'>Blog</p>
          <p className='font-[Satoshi] font-[400] text-[20px] leading-[40.1px]'>Wallets</p>
          <p className='font-[Satoshi] font-[400] text-[20px] leading-[40.1px]'>Rates</p>
          <p className='font-[Satoshi] font-[400] text-[20px] leading-[40.1px]'>High bids</p>
        </div>
        <div className='text-left'>
          <p className='block md:hidden font-[Poppins] font-[300] text-[12px] leading-[17px] text-[#333333]'>REACH US</p>
          <div className='flex gap-[1rem] items-center'>
            <Image src={mail} alt='mail'/>
            <p className='font-[Satoshi] font-[400] text-[20px] leading-[40.1px]'>artsystudios@gmail.com</p>
          </div>
          <div className='flex gap-[1rem] items-center'>
          <Image src={location} alt='location'/>

            <p className='font-[Satoshi] font-[400] text-[20px] leading-[40.1px]'>Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
      <div>
        <p className='hidden md:block font-[Rubik] font-[700] text-[grey] text-[20px] leading-[71.1px]'>Artsystudios © 2022. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
