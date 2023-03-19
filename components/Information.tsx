import React from 'react';
import Button from '../components/Button'
import { MdCheckBox } from 'react-icons/md';
const Information = () => {
    return (
        <div className='w-[100%] px-[3rem] max-w-[50%] '>
            <div className='w-[30rem]'>
            <div>
                <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Your Email</p>
                <input className='w-[30rem] outline-none mb-[1rem] h-[2.5rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]' placeholder='aanuoluwateenah@gmail.com' name='email'/>
         <div className='flex items-center mb-[1rem]'> <MdCheckBox/><p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Get updates about new drops & exclusive offers</p>
         </div>  
         </div>
            <div>
                <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Your Full Name</p>
                <input className='w-[30rem] mb-[1rem] outline-none h-[2.5rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]'  placeholder='Anuoluwapo Bamisaye' name='fullname'/>
            </div>
            <div>
                <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Choose a wallet</p>
                <input className='w-[30rem] mb-[1rem] outline-none h-[2.5rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]' placeholder='Anuoluwapo Bamisaye' name='wallet'/>
            </div>
            <div>
                <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>City</p>
                <select className='w-[30rem] mb-[1rem] outline-none h-[2.5rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]'>
                    <option value="State"></option>
                    <option value="option1">Ogun</option>
                    <option value="option2">Oyo</option>
                    <option value="option3">Lagos</option>
                </select>
            </div>
            <div className='flex gap-[1rem]'>
            <div>
                <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Country</p>
                <select className='w-[15rem] outline-none mb-[1rem] h-[2.5rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]'>
                    <option value=""></option>
                    <option value="option1">Ogun</option>
                    <option value="option2">Oyo</option>
                    <option value="option3">Lagos</option>
                </select>
            </div>
            <div>
                <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Postal Code</p>
                <input className='w-[15rem] mb-[1rem] outline-none h-[2.5rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]' placeholder='001001' name='code'/>
            </div>
            </div>
            <div>
                <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Phone Number</p>
                <input className='w-[30rem] mb-[1rem] outline-none h-[2.5rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]' placeholder='0812 3456 785' name='number'/>
            </div>
            </div>
            <div className='flex flex-col items-center justify-between'>
                <Button text='Proceed to Payment' />
            </div>
        </div>
    );
}

export default Information;
