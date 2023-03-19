import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import { allProducts } from './assets/utils'
import Link from 'next/link';
import useToggle from '../hooks/useToggle';
import filter from './assets/filter.png'
import Image from 'next/image'
const Filter = () => {
    const [toggle, handleToggle] = useToggle()
    return (

        <div className='max-w-[100%] gap-[4rem] flex'>
            <div className='hidden md:block max-w-[20%] '>
                <div className='border-b-4 rounded w-[8rem] border-[#AFB091] flex gap-[1rem] items-center'>
                    <Image src={filter} alt='filter' />
                    <h2 className='font-[Satoshi] font-[500] text-[32px] leading-[50px] '>Filter</h2>

                </div>
                <div className='block'  >
                    <div className='flex items-center gap-[1rem]' >
                        <h2 className='font-[Satoshi] font-[500] text-[24px] leading-[44px]'>By Category </h2>
                        <p onClick={handleToggle}>{toggle ? (<IoIosArrowUp />) : (<MdOutlineKeyboardArrowDown />)}</p>
                    </div>
                    <div className={`${toggle ? 'block' : 'hidden'}`}>
                        <div className='flex items-center gap-[1rem]'>
                            <input type="checkbox" className="checked:bg-[black]" />
                            <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>Editorials</p>
                        </div>
                        <div className='flex items-center gap-[1rem]'>
                            <input type="checkbox" className="checked:bg-[black]" />
                            <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>Fashion</p>
                        </div>
                        <div className='flex items-center gap-[1rem]'>
                            <input type="checkbox" className="checked:bg-[black]" />
                            <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>Optics</p>
                        </div>
                        <div className='flex items-center gap-[1rem]'>
                            <input type="checkbox" className="checked:bg-[black]" />
                            <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>Art & Museum</p>
                        </div>
                        <div className='flex items-center gap-[1rem]'>
                            <input type="checkbox" className="checked:bg-[black]" />
                            <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>Nature</p>
                        </div>

                    </div>
                </div>
                <div className='block'  >
                    <div className='flex items-center gap-[1rem]' >
                        <h2 className='font-[Satoshi] font-[500] text-[24px] leading-[44px]'>By price </h2>
                        <p onClick={handleToggle}>{toggle ? (<IoIosArrowUp />) : (<MdOutlineKeyboardArrowDown />)}</p>
                    </div>

                    <div className={`${toggle ? 'block' : 'hidden'}`}>
                        <div className='flex items-center gap-[1rem]'>
                            <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>$100.00 - $150.00</p>
                        </div>
                    </div>
                    <div className='block'  >
                        <div className='flex items-center gap-[1rem]' >
                            <h2 className='font-[Satoshi] font-[500] text-[24px] leading-[44px]'>By artist </h2>
                            <p onClick={handleToggle}>{toggle ? (<IoIosArrowUp />) : (<MdOutlineKeyboardArrowDown />)}</p>
                        </div>
                        <div className={`${toggle ? 'block' : 'hidden'}`}>
                            <div className='flex items-center gap-[1rem]'>
                                <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px] underline'>All</p>
                            </div>
                            <div className='flex items-center gap-[1rem]'>
                                <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>Below $100.00</p>
                            </div>
                            <div className='flex items-center gap-[1rem]'>
                                <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>$100.00 - $150.00</p>
                            </div>
                            <div className='flex items-center gap-[1rem]'>
                                <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>$150.00 - $200.00</p>
                            </div>
                            <div className='flex items-center gap-[1rem]'>
                                <p className='font-[Satoshi] font-[400] text-[20px] leading-[32px]'>Above $200.00</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='block'  >
                    <div className='flex items-center gap-[1rem]' >
                        <h2 className='font-[Satoshi] font-[500] text-[24px] leading-[44px]'>Collection year </h2>
                        <p onClick={handleToggle}>{toggle ? (<IoIosArrowUp />) : (<MdOutlineKeyboardArrowDown />)}</p>
                    </div>
                </div>

            </div>
            <div className='flex flex-col m-auto items-center justify-center  max-w-[80%] w-[100%]'>
                <div className=' flex flex-col m-auto items-center justify-center  md:grid md:grid-cols-3 gap-[4rem]'>
                    {allProducts.map((product) => {
                        return (
                            <div className='mt-[3rem] w-[15rem] rounded-md shadow-md border border-[white] bg-[white] items-left p-[10px] flex flex-col' key={product.id}>

                                <Link href={`product/${product.slug}`}>
                                    <Image src={product.picture} alt='products' />
                                </Link>
                                <div className='flex justify-between'>
                                    <h2 className='font-[Satoshi] font-[400] text-[20px] leading-[34px]'>{product.title}</h2>
                                    <h2 className='font-[Satoshi] font-[700] text-[24px] leading-[34px]'>{product.price}</h2>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            allProducts,
        },
    };
}

export default Filter;
