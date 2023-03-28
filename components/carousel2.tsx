import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineHeart } from 'react-icons/ai'
import { Pagination, Navigation } from "swiper";
import first from '../components/assets/Rectangle 247.png'
import second from '../components/assets/Rectangle 245.png'
import third from '../components/assets/Rectangle 246.png'
import { Items } from './assets/utils';
const Carousel2 = () => {
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
        breakpoints={{
          370: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
         
      }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="pl-[2rem]"
      >
        >
            <SwiperSlide>
                <div className='mt-[3rem] relative w-[25rem] bg-[white] p-[20px] flex flex-col'>
                    <Image src={first} alt='products' />
                    <div className='flex justify-between'>
                        <div className='m-auto justify-center border absolute z-[10] h-[3rem] bottom-[3rem] text-center w-[15rem] flex right-[6rem] rounded-md border-[white] bg-[transaprent] items-center gap-[10px]'>
                            <h2 className='font-[Satoshi] font-[500] text-[24px] text-[white] text-center leading-[34px]'>6hr : 40mins: 15s</h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mt-[3rem] relative w-[25rem] bg-[white] p-[20px] flex flex-col'>
                    <Image src={second} alt='products' />
                    <div className='flex justify-between'>
                        <div className='m-auto justify-center border absolute z-[10] h-[3rem] bottom-[3rem] text-center w-[15rem] flex right-[6rem] rounded-md border-[white] bg-[transaprent] items-center gap-[10px]'>
                            <h2 className='font-[Satoshi] font-[500] text-[24px] text-[white] text-center leading-[34px]'>6hr : 40mins: 15s</h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='mt-[3rem] relative w-[25rem] bg-[white] p-[20px] flex flex-col'>
                    <Image src={third} alt='products' />
                    <div className='flex justify-between'>
                        <div className='m-auto justify-center border absolute z-[10] h-[3rem] bottom-[3rem] text-center w-[15rem] flex right-[6rem] rounded-md border-[white] bg-[transaprent] items-center gap-[10px]'>
                            <h2 className='font-[Satoshi] font-[500] text-[24px] text-[white] text-center leading-[34px]'>6hr : 40mins: 15s</h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
export default Carousel2;

