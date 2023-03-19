import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Total2 = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        let totalShipping = 2
        cart.forEach(product => {
            totalQuantity += product.quantity
            totalShipping += 2 * product.quantity
            totalPrice += product.price * product.quantity + totalShipping
        })
        return { totalPrice, totalQuantity, totalShipping }
    }
    return (
        <div className='pt-[2rem] flex flex-row justify-between'>

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

export default Total2;
