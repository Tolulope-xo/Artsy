import React, { useState } from 'react';
import { GiCancel } from 'react-icons/gi'
import Image from 'next/image';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cart.slice';
import { useDispatch } from 'react-redux';
const ProductItem = ({ product, id }) => {
  const dispatch = useDispatch();

  return (
    <div key={product.price}>
      <div>
        <div className='py-[2rem] border-b-[1px] border-[#747474]  flex justify-between px-[3rem]'>
          <div className='flex justify-center gap-[3rem]'>
            <Image className='w-[10rem] h-[10rem]' src={product.picture} alt='product' height="90" width="65" />
            <div>
              <p className='font-[Satoshi] font-[500] text-[24px] leading-[30px] text-[#292929]'> {product.title}</p>
              <p className='font-[Satoshi] font-[500] text-[24px] leading-[30px] text-[#888888]'>Clearamane</p>
              <div className='flex'>
                <p className='font-[Satoshi] font-[500] text-[24px] leading-[30px] text-[#888888]'>Size:</p>
                <p className='font-[Satoshi] font-[500] text-[24px] leading-[30px] text-[#292929]'>200 ft</p>
              </div>
              <div className='flex gap-[1rem] font-[Satoshi] font-[500] text-[24px] leading-[40px] text-[#292929]'>
                <button onClick={() => dispatch(decrementQuantity(product.id))}>
                  -
                </button>
                <p>{product.quantity}</p>
                <button onClick={() => dispatch(incrementQuantity(product.id))}>
                  +
                </button>
              </div>
            </div>
          </div>

          <div className='flex-col justify-between flex'>
            <button onClick={() => dispatch(removeFromCart(product.id))}>
                        <GiCancel className='text-[34px] leading-[30px] text-[#888888]' />
                      </button>
            <p className='font-[Cardo] font-[400] text-[36px] leading-[45px] text-[#292929]'>${product.quantity * product.price}</p>
          </div>


        </div>

      </div>
    </div>
  );
}

export default ProductItem;
