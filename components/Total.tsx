import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/Button'
const Total = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        let totalShipping = 2
        cart.forEach(product => {
            totalQuantity += product.quantity
            totalShipping
            totalPrice += product.price * product.quantity + totalShipping
        })
        return { totalPrice, totalQuantity, totalShipping }
    }
    return (
        <div className='pt-[2rem] flex flex-row justify-between'>
            <div className='flex flex-col items-center justify-between'>
            <Button text='Proceed to Checkout'/>
            <p className='underline text-[#006CA2] font-[Satoshi] font-[500] text-[28px]'>Continue shopping</p>
        </div>
            

            <div className='text-[#888888] font-[Satoshi] font-[400] text-[20px] leading-[37px] '>
                <p>Products in cart: </p>
                <p>Shipping: </p>
                <p>Total: </p>

            </div>
            <div className='justify-right flex flex-col items-end font-[Satoshi] font-[400] text-[20px] leading-[37px] '>
                <p>{getTotal().totalQuantity} items</p>
                <p>${getTotal().totalShipping}</p>
                <p>${getTotal().totalPrice}</p>

            </div>


        </div>
    );
}

export default Total;
