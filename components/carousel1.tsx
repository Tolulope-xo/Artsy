import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineHeart } from 'react-icons/ai'
import { Pagination, Navigation } from "swiper";
import one from '../components/assets/Rectangle 254.png'
import two from '../components/assets/Rectangle 256.png'
import three from '../components/assets/Rectangle 258.png'
import four from '../components/assets/Rectangle 260.png'
import eth from '../components/assets/eth.png'

import { Items } from './assets/utils';
const Carousel1 = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={false}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="pl-[2rem]"
    >
      <SwiperSlide>
      <div className='mt-[3rem] w-[25rem] border border-[black] bg-[white] p-[20px] flex flex-col'>
        <div className='flex flex-col items-end'>
        <AiOutlineHeart className='text-[45px]  text-[#292929]' />

        </div>
          <Image src={one} alt='products' />
          <div className='flex justify-between'>
            <h2 className='font-[Satoshi] font-[400] text-[20px] leading-[34px]'>Sassy</h2>
            <div className='flex items-center gap-[10px]'>        
            <Image className='w-[1rem] ' src={eth} alt='products' />
              <h2 className='font-[Satoshi] font-[500] text-[24px] leading-[34px]'>0.03</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='mt-[3rem] w-[25rem] border border-[black] bg-[white] p-[20px] flex flex-col'>
        <div className='flex flex-col items-end'>
        <AiOutlineHeart className='text-[45px]  text-[#292929]' />

        </div>  <Image src={two} alt='products' />
          <div className='flex justify-between'>
            <h2 className='font-[Satoshi] font-[400] text-[20px] leading-[34px]'>Escape</h2>
            <div className='flex items-center gap-[10px]'>        
            <Image className='w-[1rem] ' src={eth} alt='products' />
              <h2 className='font-[Satoshi] font-[500] text-[24px] leading-[34px]'>0.03</h2>
            </div>          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='mt-[3rem] w-[25rem] border border-[black] bg-[white] p-[20px] flex flex-col'>
        <div className='flex flex-col items-end'>
        <AiOutlineHeart className='text-[45px]  text-[#292929]' />

        </div> <Image src={three} alt='products' />
          <div className='flex justify-between'>
            <h2 className='font-[Satoshi] font-[400] text-[20px] leading-[34px]'>Lost</h2>
            <div className='flex items-center gap-[10px]'>        
            <Image className='w-[1rem]' src={eth} alt='products' />
              <h2 className='font-[Satoshi] font-[500] text-[24px] leading-[34px]'>3.20</h2>
            </div>          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='mt-[3rem] w-[25rem] border border-[black] bg-[white] p-[20px] flex flex-col'>
        <div className='flex flex-col items-end'>
        <AiOutlineHeart className='text-[45px]  text-[#292929]' />

        </div>

          <Image src={four} alt='products' />
          <div className='flex justify-between items-center'>
            <h2 className='font-[Satoshi] font-[400] text-[20px] leading-[34px]'>Circa</h2>
            <div className='flex items-center gap-[10px]'>        
            <Image className='w-[1rem]' src={eth} alt='products' />
              <h2 className='font-[Satoshi] font-[500] text-[24px] leading-[34px]'>0.20</h2>
            </div>          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Carousel1;

