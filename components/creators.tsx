import React from 'react';
import Image from 'next/image';
import loader2 from '../components/assets/Loader (2).png'
import beardsmall from '../components/assets/beardsmall.png'
import girlie from '../components/assets/girlie.png'
import beardFrown from '../components/assets/beardFrown.png'

const Creators = () => {
    return (
        <div className='mt-[8rem] bg-[#E2E2E2] px-[2rem] md:px-[4rem] h-fit md:h-[45rem] max-h-[100%]'>
            <div className='flex justify-between'>
            <h2 className='font-[Clash] font-[600] text-[20px] md:text-[55px] leading-[35.5px] md:leading-[85.5px]'>TOP CREATORS OF THE WEEK</h2>
            <div className='flex gap-[1rem] items-end'>
                <Image className='hidden md:block h-[15rem]' src={loader2} alt='load'/>
                <div className='flex md:block gap-[1rem]'>
                <h3 className='font-[Clash] font-[400] text-[10px] md:text-[40px] leading-[62.5px]'>Editorials</h3>
                <h3 className='font-[Clash] font-[400] text-[10px] md:text-[40px] leading-[62.5px]'>Fashion</h3>
                <h3 className='font-[Clash] font-[400] text-[10px] md:text-[40px] leading-[62.5px]'>Lifestyle</h3>
                <h3 className='font-[Clash] font-[400] text-[10px] md:text-[40px] leading-[62.5px]'>Blueprint</h3>
                </div>
            </div>
            </div>
            <div className='relative top-0'>
            <p className='font-[Clash] font-[200] text-[20px] md:text-[30px] leading-[41.5px] text-[rgba(0, 0, 0, 0.57)] '>“Everything always looked better in black and white. Everything always  as if it were the first time; there’s always more people in a black and white photograph. It just makes it seem that there were more people at a gig, more people at a football match, than with colour photography. Everything looks more exciting.”– Jack Lowden
            </p>
            <div className= 'flex flex-col justify-right items-right text-right absolute top-[0rem] right-[0rem] md:right-[4rem]'>
            <h2 className='font-[Clash] font-[700] text-[30px] md:text-[48px] leading-[150.5px]'>CIRCA</h2>
            <h2 className='font-[Clash] font-[700] text-[70px] md:text-[150px] line-through leading-[180.5px]'>1985</h2> 
            </div>
            <div className='absolute block w-[100%] max-w-[15rem] md:max-w-[30rem] h-[15rem] md:h-[30rem] my-0 mx-auto top-[1rem] md:top-[-9rem] right-[5rem] md:right-[16rem]'>
            <Image className='delay-[0s] absolute left-0 w-[100%] h-[100%] bg-cover bg-center bg-no-repeat animate-fade' src={beardsmall} alt='beard1'/>
            <Image className='delay-[5s] absolute left-0 w-[100%] h-[100%] bg-cover bg-center bg-no-repeat animate-fade' src={girlie} alt='girl'/>
            <Image className='delay-[20s] absolute left-0 w-[100%] h-[100%] bg-cover bg-center bg-no-repeat animate-fade' src={beardFrown} alt='beard2'/>
            </div>
            </div>
        </div>
    );
}

export default Creators;
