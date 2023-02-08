import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { allProducts } from '../../components/assets/utils'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import { AiOutlineHeart } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { MdArrowBackIosNew } from 'react-icons/md'

import { AiOutlineArrowRight } from 'react-icons/ai'
import eth from '../../components/assets/eth.png'
import Carousel1 from '../../components/carousel1'
import Image from 'next/image';
const ProductScreen = () => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [count, setCount] = useState(0)
  const incNum = () => {
    if (count < 100) {
      setCount(Number(count) + 1);
    }
  };
  const decNum = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const { query } = useRouter()
  const { slug } = query;
  const product = allProducts.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <div className='px-[3rem]'>
      <div className='flex items-center h-[5rem] m-auto'>
        <a className='font-[Satoshi] text-[20px]  font-[500] leading-[40px]' href='/home'>Home/</a>
        <a className='font-[Satoshi] text-[20px]  font-[500] leading-[40px]' href='/marketplace'>Marketplace/</a>
        <p className='font-[Satoshi] text-[20px]  font-[500] leading-[40px]'>Editorial/{product.slug}</p>
      </div>
      <div className='flex gap-4 m-auto justify-between h-[38rem] border border-1 border-[black]'>
        <Image className='p-[1rem] w-fit flex items-center' src={product.picture} alt='products' />

        <div className='w-[40rem] border-l border-[black] '>
          <div className=' flex justify-between p-[1rem] items-center'>
            <h2 className='font-[Satoshi] text-[30px]  font-[700] leading-[40px] normal-case '>{product.title}</h2>
            <div className='flex items-center gap-[10px]'>
              <Image className='w-[2rem] ' src={eth} alt='products' />
              <p className='font-[Stix] text-[40px] font-[500] l/eading-[50px]'>0.09</p>
            </div>
          </div>
          <div className='border-t border-[black] h-[15rem] px-[1rem] py-[2rem]'>
            <div className='flex items-center'>
              <h2 className='font-[Satoshi] text-[30px] font-[400] leading-[30px] text-[#616161]'>Creator: </h2>
              <p className='font-[Satoshi] text-[#3341C1] text-[30px] font-[400] leading-[39px]'>Ali Dawa</p>
            </div>
            <p className='font-[Satoshi] text-[18px] font-[400] leading-[43px] text-[#000000]'>Made  In Italy</p>
            <div className='flex items-center'>
              <p className='font-[Satoshi] text-[28px] font-[500] leading-[37px] text-[#000000]'>Total views: </p>
              <p className='font-[Satoshi] text-[28px] font-[500] leading-[47px] text-[#000000]'>1.7k views</p>
            </div>
            <div className='flex items-center gap-[15px] w-[3rem]'>
              <button className='w-[1rem] font-[Satoshi] text-[28px] font-[500] leading-[27px]' onClick={decNum}>
                -
              </button>
              <p className='w-[1rem] font-[Satoshi] text-[28px] font-[500] leading-[27px]'>{count}</p>
              <button  className='w-[1rem] font-[Satoshi] text-[28px] font-[500] leading-[27px] text-[#000000]' onClick={incNum}>
                +
              </button>

            </div>
            <div className='flex items-center gap-[1rem] m-auto'>
              <button onClick={() => dispatch(addToCart(product))} className='flex bg-[#3341C1] gap-[10px] p-[10px] items-center text-[white]'>
              <Link href="/cart">Add to Cart</Link>
                <AiOutlineArrowRight  /></button>
              <AiOutlineHeart className='border text-[45px] border-[#292929] text-[#292929]' />
            </div>
          </div>
          <div className='h-[6rem] '>
            <div className='border-t p-[1rem] border-[black] flex px-[1rem] items-center justify-between'>
              <h2 className='font-[Satoshi] font-[500] text-[28px] leading-[30px]'>Description</h2>
              <p onClick={handleToggle}>{toggle ? (<IoIosArrowUp />) : (<MdOutlineKeyboardArrowDown />)}</p>
            </div>
            <div className={`${toggle ? 'block' : 'hidden'}`}>
              <div className='flex items-center gap-[1rem] h-fit'>
                <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>Loreminvadskjlnalfkjn</p>
              </div>


            </div>
          </div>
          <div className='h-[6rem] '>
            <div className='border-t p-[1rem] border-[black] flex px-[1rem] items-center justify-between'>
              <h2 className='font-[Satoshi] font-[500] text-[28px] leading-[30px]'>Listing</h2>
              <p onClick={handleToggle}>{toggle ? (<IoIosArrowUp />) : (<MdOutlineKeyboardArrowDown />)}</p>
            </div>
            <div className={`${toggle ? 'block' : 'hidden'}`}>
              <div className='flex items-center gap-[1rem] h-fit'>
                <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>Loreminvadskjlnalfkjn</p>
              </div>
            </div>
          </div>
          <div className='h-[6rem] '>
            <div className='border-t p-[1rem] border-[black] flex px-[1rem] items-center justify-between'>
              <h2 className='font-[Satoshi] font-[500] text-[28px] leading-[30px]'>Status</h2>
              <p onClick={handleToggle}>{toggle ? (<IoIosArrowUp />) : (<MdOutlineKeyboardArrowDown />)}</p>
            </div>
            <div className={`${toggle ? 'block' : 'hidden'}`}>
              <div className='flex items-center gap-[1rem] h-fit'>
                <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>Loreminvadskjlnalfkjn</p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className='flex items-center justify-between border shadow-md border-[white] h-[5rem] px-[2rem] my-[2rem]'>
        <h2 className='font-[Satoshi] text-[30px]  font-[500] leading-[30px]'>Explore more from this collection</h2>
        <div className='flex item-center gap-[2rem]'>
          <div className='border rounded-2xl border-[black] w-[2rem] items-center flex h-[2rem] justify-center m-auto'>
            <MdArrowBackIosNew className='text-[1rem]' />
          </div>
          <div className='border rounded-2xl border-[black] w-[2rem] items-center flex h-[2rem] justify-center m-auto'>
            <IoIosArrowForward className='text-[1rem]' />
          </div>

        </div>
      </div>
      <Carousel1 />
      <div>            <Link href='/marketplace' className='font-[Satoshi] font-[500] text-[18px] leading-[20px] w-[8rem] flex m-auto h-[2rem] mt-[5rem] items-center text-center justify-center border border-[black] rounded'>Explore all</Link>
      </div>
    </div>
  );
}

export default ProductScreen;
