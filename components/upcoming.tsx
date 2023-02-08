import React from 'react'
import Image from 'next/image';
import arrowB from '../components/assets/arrowB.png'
import loader from '../components/assets/Loader (1).png'
import show from '../components/assets/show.png'
const Upcoming = () => {
    return (
        <div>
            <div className='m-auto mb-[7rem] py-[1rem] md:py-0 w-full justify-center items-center bg-gradient-to-r from-color1 via-color2 to-color3'>
                <h3 className='font-[Satoshi] pl-[4rem] pt-[1rem] md:pt-[3rem] hidden md:block text-[white] font-[400] underline text-[20px] md:text-[40px] leading-[54px]'>See Upcoming Auctions and Exhibitions</h3>
                <div className=''>
                    <Image className='mt-[2rem] flex justify-center items-center m-auto w-[90%]' src={show} alt='show' />
                    <div className='relative h-[5rem] md:h-full pl-[2rem] md:pl-0 bottom-[13rem] md:bottom-[15rem] w-fit md:w-[70rem] block md:flex justify-between items-end m-auto flex-row z-10'>
                        <div className='flex justify-between items-center leading-[2rem]'>
                            <h2 className='font-[Bellefair] text-[white] font-[100] text-[20px] md:text-[70px] leading-[20.6px] md:leading-[88.6px]'>01</h2>
                            <div className='flex flex-col justify-end'>
                                <p className='font-[Bellefair] text-[white] font-[200] text-[19.23px] md:text-[29.23px] leading-[28.6px] md:leading-[40.5px]'>MONALISA REDEFINED <br /> IN STYLE.</p>
                                <p className='font-[Poppins] text-[white] font-[200] text-[13.46px] leading-[20.19px] md:leading-[40.19px]'>Start on : 08:00 GTS . Monday </p>
                                <p className='font-[Satoshi] text-[white] font-[200] text-[10.23px] md:text-[15.86px] leading-[21.41px]'>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH <br /> INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR <br />  HIGHEST AND LOWEST BIDS.</p>
                            </div>
                        </div>
                        <div className='flex justify-between w-[20rem] items-end'>
                            <p className='font-[Satoshi] text-underline text-[white] font-[400] underline text-[20px] leading-[10px] md:leading-[20px] content-end'>See more</p>
                            <button className='font-[Satoshi] rounded-2xl p-[10px] md:p-[20px] mt-[5px] md:mt-[1rem] text-[white] font-[400] text-[20px] content-end leading-[10.6px] md:leading-[20px] border-2 border-[#FFFFFF]'>Set a reminder</button>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex mx-[3rem] pt-[0rem] justify-between items-center m-auto'>
                    <Image src={loader} alt='loader1' />
                    <div className='flex gap-[1rem] '>
                        <p className='w-[3rem] bg-gradient-to-b from-[#AEAEAE] to-[#FFFFFF] h-[3rem] items-center justify-center flex rounded-full border border-[#AEAEAE] text-[white]'>&lt;</p>
                        <p className='w-[3rem] bg-gradient-to-b from-[#AEAEAE] to-[#FFFFFF] h-[3rem] items-center justify-center flex rounded-full border border-[#AEAEAE] text-[white]'>&gt;</p>
                    </div>

                </div>
            </div>
            <div className=''>
                <hr className='#333333'/>
                <div className='my-[2rem] px-[3rem] flex gap-[1rem] justify-between items-center'>
                <h2 className='font-[Satoshi] font-[500] text-[48px] leading-[64.8px]'>
                    Explore marketplace
                </h2>
                <Image src={arrowB} className='cursor-pointer' alt='arrowB'/>
                </div>
                <hr className='#333333'/>
                <div className='my-[2rem] px-[3rem] flex gap-[1rem] justify-between items-center'>
                <h2 className='font-[Satoshi] font-[500] text-[48px] leading-[64.8px]'>
                    See auctions
                </h2>
                <Image src={arrowB} className='cursor-pointer' alt='arrowB'/>
                </div>
                <hr className='#333333'/>

            </div>
        </div>

    )
}

export default Upcoming