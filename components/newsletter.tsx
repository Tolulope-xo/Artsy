import React from 'react';

const Newsletter = () => {
  return (
    <div className='border-0 md:border border-[rgba(51, 51, 51, 1)] mx-[2rem] md:mx-[4rem] items-left md:items-center justify-center flex flex-col text-left md:text-center h-[15rem] mt-[3rem]'>
      <h2 className='font-[Baskervville] text-[30px] font-[400] leading-[39px]'>NEWSLETTER</h2>
      <p className='font-[Satoshi] text-[16px] md:text-[32px] font-[400] leading-[33px] md:leading-[73px]'>Subscribe to get daily updates on new drops & exciting deals </p>
      <form className='flex flex-col md:flex-row items-left md:items-center justify-between gap-[2rem]'>
        <input className='border border-[black] placeholder:text-[16px] placeholder:text-[black] placeholder:font-[Baskervville] pl-[2rem] md:pl-[2rem] w-[20rem] h-[2rem]' type='text' name='name' placeholder='Enter your Email'/>
        <button className='bg-[#272727] w-[10rem] cursor-pointer text-[13px] h-[2rem] text-[#FFFFFF] font-[Baskervville]'>SUBSCRIBE</button>
      </form>
    </div>
  );
}

export default Newsletter;
