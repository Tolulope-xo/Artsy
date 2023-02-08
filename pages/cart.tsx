import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Importing actions from  cart.slice.js
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import { GiCancel } from 'react-icons/gi'
import ProductItem from '../components/Productitem';

const Cart = () => {
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  const [nextField, setNextField] = useState('tab_1')
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, product) => accumulator + product.quantity * product.price,
      0
    );
  };

  return (
    <div>
      <div className='border-[#E6E6E6] border-b-[1px]  m-auto w-fit flex gap-[2rem] items-center scroll-smooth "'>
        <h6 className={`py-2 pb-1 text-[#CCCCCC] text-[24px] leading-[30px] font-[500] cursor-pointer font-[Satoshi] text-xl ${'tab_1' === nextField
          ? "border-[#2F4333] border-b-[1px]   text-[#000]"
          : "border-transparent "
          }`} onClick={() => setNextField('tab_1')}>Shopping cart</h6>
        <h6 className={`py-2 pb-1 text-[#CCCCCC] text-[24px] leading-[30px] font-[500] cursor-pointer font-[Satoshi] text-xl ${'tab_2' === nextField
          ? "border-[#2F4333] border-b-[1px]   text-[#000]"
          : "border-transparent "
          }`} onClick={() => setNextField('tab_2')} >Shopping details</h6>
        <h6 className={`py-2 pb-1 text-[#CCCCCC] text-[24px] leading-[30px] font-[500] cursor-pointer font-[Satoshi] text-xl ${'tab_3' === nextField
          ? "border-[#2F4333] border-b-[1px] text-[#000]"
          : "border-transparent "
          }`} onClick={() => setNextField('tab_3')}>Payment details</h6>
      </div>
      {nextField === 'tab_1' &&
        <div className='mx-[3rem] m-auto border-[#747474] border-t-[1px]'>
          {cart.length === 0 ? (
            <h1>Your Cart is Empty!</h1>
          ) : (
            <>
              {cart.map((product, key) => (
                <div key={key}>
               <ProductItem product={product}/>
               </div>
              ))}
            </>

          )}
          {/* {cart.map((product, key) => (
            <div key={key}>
              <div>
                <button>Proceed to checkout</button>
                <p>Continue shopping</p>
              </div>
              <div>
                <p>Products in cart: {product.quantity} items</p>
                <p>{product.shipping}</p>
                <p>${product.quantity * product.price }</p>
              </div>
            </div>
          ))} */}

        </div>

      }



    </div>
  );
};

export default Cart;