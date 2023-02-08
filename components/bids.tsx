import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai'
import three from '../components/assets/Rectangle 57.png'
import Image from 'next/image'

const Bids = () => {
    return (
        <div className=''>
            <h2 className='font-[Satoshi] font-[700] text-[30px] leading-[50px]'>Top bids from popular creators</h2>
            <div className='block md:flex  items-center m-auto justify-center gap-[5rem]'>
                <div>
                        <div className='mt-[3rem] w-fit md:w-[35rem] border border-[white] shadow-md rounded-md bg-[white] py-[1rem] flex flex-col'>
                            <div className='flex flex-col items-end'>
                                <AiOutlineHeart className='border  items-center  rounded-2xl border-[black] text-[2rem]  text-[#292929]' />

                            </div><Image className='w-[35rem] h-[20rem]' src={three} alt='products' />
                            <div className='flex justify-between'>
                                <h2 className='pl-[1rem] font-[Satoshi] font-[700] text-[40px] leading-[64px]'>Out of the box</h2>

                            </div>
                        </div>
                    <div>
                        <div className='flex items-center gap-[1rem]'>
                            <h2 className='font-[Satoshi] font-[500] text-[20px] text-[#616161] leading-[50px]'>Creator:</h2>
                            <p className='font-[Satoshi] font-[700] text-[#333333] text-[20px] leading-[50px]'>Dan Murray</p>
                        </div>
                        <div className='flex items-center gap-[1rem]'>
                            <h2 className='font-[Satoshi] font-[500] text-[20px] text-[#616161] leading-[50px]'>Date:</h2>
                            <p className='font-[Satoshi] font-[700] text-[#333333] text-[20px] leading-[50px]'>12/08/22</p>
                        </div>
                        <div className='flex items-center gap-[1rem]'>
                            <h2 className='font-[Satoshi] font-[500] text-[20px] text-[#616161] leading-[50px]'>Highest bid:</h2>
                            <p className='font-[Satoshi] font-[700] text-[#333333] text-[20px] leading-[50px]'>0.57 ETH</p>
                        </div>
                    
                        <div className='flex bg-[#F6F4F4] items-center rounded-xl border border-[#F6F4F4] justify-between w-fit md:w-[35rem] px-[1rem]'>
                        <div className='flex flex-col items-center gap-[1rem]'>
                            <h2 className='font-[Satoshi] font-[500] text-[20px] text-[#616161] leading-[60px]'>Current bid:</h2>
                            <p className='font-[Satoshi] font-[700] text-[#333333] text-[20px] leading-[60px]'>0.987 ETH</p>
                        </div>
                            <button className='bg-[#3341C1] font-[Satoshi] font-[500] leading-[34px] text-[25px]  text-[white] w-[10rem] h-[3rem]'>Place bid</button>
                        </div>
                    </div>
                </div>
                <div>
                        <div className='mt-[3rem] w-fit md:w-[35rem] border border-[white] shadow-md rounded-md bg-[white] py-[1rem] flex flex-col'>
                            <div className='flex flex-col items-end'>
                                <AiOutlineHeart className='border  items-center  rounded-2xl border-[black] text-[2rem]  text-[#292929]' />

                            </div><Image className='w-[35rem] h-[20rem]' src={three} alt='products' />
                            <div className='flex justify-between'>
                                <h2 className='pl-[1rem] font-[Satoshi] font-[700] text-[40px] leading-[64px]'>Falling apart</h2>

                            </div>
                        </div>
                    <div>
                        <div className='flex items-center gap-[1rem]'>
                            <h2 className='font-[Satoshi] font-[500] text-[20px] text-[#616161] leading-[50px]'>Creator:</h2>
                            <p className='font-[Satoshi] font-[700] text-[#333333] text-[20px] leading-[50px]'>Jacob Banks</p>
                        </div>
                        <div className='flex items-center gap-[1rem]'>
                            <h2 className='font-[Satoshi] font-[500] text-[20px] text-[#616161] leading-[50px]'>Date:</h2>
                            <p className='font-[Satoshi] font-[700] text-[#333333] text-[20px] leading-[50px]'>12/08/22</p>
                        </div>
                        <div className='flex items-center gap-[1rem]'>
                            <h2 className='font-[Satoshi] font-[500] text-[20px] text-[#616161] leading-[50px]'>Highest bid:</h2>
                            <p className='font-[Satoshi] font-[700] text-[#333333] text-[20px] leading-[50px]'>0.34 ETH</p>
                        </div>
                    
                        <div className='flex bg-[#F6F4F4] items-center rounded-xl border border-[#F6F4F4] justify-between w-fit md:w-[35rem] px-[1rem]'>
                        <div className='flex flex-col items-center gap-[1rem]'>
                            <h2 className='font-[Satoshi] font-[500] text-[20px] text-[#616161] leading-[60px]'>Current bid:</h2>
                            <p className='font-[Satoshi] font-[700] text-[#333333] text-[20px] leading-[60px]'>0.99 ETH</p>
                        </div>
                            <button className='bg-[#3341C1] font-[Satoshi] font-[500] leading-[34px] text-[25px]  text-[white] w-[10rem] h-[3rem]'>Place bid</button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default Bids;
