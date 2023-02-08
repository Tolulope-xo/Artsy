import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import person1 from '../components/assets/person1.png'
import person2 from '../components/assets/person2.png'
import person3 from '../components/assets/person3.png'
import person4 from '../components/assets/person4.png'
import person5 from '../components/assets/person5.png'
import finewoman from '../components/assets/finewoman.png'
import ancient from '../components/assets/ancient.png'
import greek from '../components/assets/greek.png'
import arrow1 from '../components/assets/arrow1.png'
import arrow from '../components/assets/arrow.png'

const Products = () => {
    return (
        <div className='mx-[1rem] md:mx-[4rem] mt-[3rem]'>
            <p className='font-[Satoshi] font-[500] text-[48px] mb-[2rem] leading-[64.8px]'>Featured products</p>
            <div className='w-[100%] block items-center md:flex space-between border-t-2 border-#333333 py-[3rem] gap-[2rem]'>
                <div className='h-[10rem] md:h-[15rem] relative overflow-hidden md:w-[45%]'>
                    <Image  src={finewoman} alt='a woman' />
                    <div className='absolute opacity-0 flex items-center m-auto justify-around left-0 bottom-0 right-0 h-[10rem] md:h-[15rem] inset bg-gradient-to-b from-transparent  to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70  transition-all ease-in-out duration-300 hover:opacity-100'>
                        <h2 className='text-[#FFFFFF] font-[Clash] font-[400] text-[40px] leading-[49.2px]'>View product</h2>
                        <Image src={arrow1} alt='arrow' />
                    </div>
                </div>
                <div className='md:w-[60%]'>
                    <h2 className='hidden md:block font-[700] font-[Stix] text-[40px] leading-[50px] pb-[1rem]'>The Boolean Egyptian</h2>
                    <p className='font-[Satoshi] font-[400] text-[24px] pt-[2rem] md:pt-[0] pb-[3rem] leading-[32.4px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                    <div className='flex justify-between items-center'>
                        <div className='relative flex justify-between items-center'>
                            <Image className='' src={person5} alt='person' />
                            <Image className='absolute left-[30px] z-[1]' src={person4} alt='person' />
                            <Image className='absolute left-[60px] z-[1]' src={person3} alt='person' />
                            <Image className='absolute left-[90px] z-[1]' src={person2} alt='person' />
                            <Image className='absolute left-[120px] z-[1]' src={person1} alt='person' />
                        </div>
                        <p className='font-[Satoshi] text-[24px] font-[500] leading-[32.4px]'>64 major creators</p>
                        <Image className='hidden md:block' src={arrow} alt='arrow' />
                    </div>
                </div>
            </div>
            <div className='w-[100%] flex-row-reverse block items-center md:flex space-between border-t-2 border-#333333 py-[3rem] gap-[2rem]'>
                <div className='h-[10rem] md:h-[15rem] relative overflow-hidden md:w-[45%]'>
                    <Image className=''  src={ancient} alt='ancient' />
                    <div className='absolute opacity-0 flex items-center m-auto justify-around left-0 bottom-0 right-0 h-[10rem] md:h-[15rem] inset bg-gradient-to-b from-transparent  to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70  transition-all ease-in-out duration-300 hover:opacity-100'>
                        <h2 className='text-[#FFFFFF] font-[Clash] font-[400] text-[40px] leading-[49.2px]'>View product</h2>
                        <Image src={arrow1} alt='arrow' />
                    </div>
                </div>
                <div className='md:w-[60%]'>
                    <h2 className='hidden md:block font-[700] font-[Stix] text-[40px] leading-[50px] pb-[1rem]'>The Boolean Egyptian</h2>
                    <p className='font-[Satoshi] font-[400] text-[24px] pb-[3rem] pt-[2rem] md:pt-[0] leading-[32.4px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                    <div className='flex justify-between items-center'>
                        <div className='relative flex justify-between items-center'>
                            <Image className='' src={person5} alt='person' />
                            <Image className='absolute left-[30px] z-[1]' src={person4} alt='person' />
                            <Image className='absolute left-[60px] z-[1]' src={person3} alt='person' />
                            <Image className='absolute left-[90px] z-[1]' src={person2} alt='person' />
                            <Image className='absolute left-[120px] z-[1]' src={person1} alt='person' />
                        </div>
                        <p className='font-[Satoshi] text-[24px] font-[500] leading-[32.4px]'>64 major creators</p>
                        <Image className='hidden md:block' src={arrow} alt='arrow' />
                    </div>
                </div>
            </div>
            <div className='w-[100%] block items-center md:flex space-between border-t-2 border-#333333 py-[3rem] gap-[2rem]'>
                <div className='h-[10rem] md:h-[15rem] relative overflow-hidden md:w-[45%]'>
                    <Image className=''  src={greek} alt='a greek' />
                    <div className='absolute opacity-0 flex items-center m-auto justify-around left-0 bottom-0 right-0 h-[10rem] md:h-[15rem] inset bg-gradient-to-b from-transparent  to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70  transition-all ease-in-out duration-300 hover:opacity-100'>
                        <h2 className='text-[#FFFFFF] font-[Clash] font-[400] text-[40px] leading-[49.2px]'>View product</h2>
                        <Image src={arrow1} alt='arrow' />
                    </div>
                </div>
                <div className='md:w-[60%]'>
                    <h2 className='hidden md:block font-[700] font-[Stix] text-[40px] leading-[50px] pb-[1rem]'>The Boolean Egyptian</h2>
                    <p className='font-[Satoshi] font-[400] text-[24px] pb-[3rem] pt-[2rem] md:pt-[0] leading-[32.4px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor pur</p>
                    <div className='flex justify-between items-center'>
                        <div className='relative flex justify-between items-center'>
                            <Image className='' src={person5} alt='person' />
                            <Image className='absolute left-[30px] z-[1]' src={person4} alt='person' />
                            <Image className='absolute left-[60px] z-[1]' src={person3} alt='person' />
                            <Image className='absolute left-[90px] z-[1]' src={person2} alt='person' />
                            <Image className='absolute left-[120px] z-[1]' src={person1} alt='person' />
                        </div>
                        <p className='font-[Satoshi] text-[24px] font-[500] leading-[32.4px]'>64 major creators</p>
                        <Image className='hidden md:block' src={arrow} alt='arrow' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
