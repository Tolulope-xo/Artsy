import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Filter from '../components/filter';
export default function Marketplace(){
    return (
        <div className='mx-[1rem] md:mx-[4rem]'>
            <div className='flex items-center justify-around my-[3rem] gap-[7rem]'>
                <div className='hidden md:flex items-center  w-[10rem] h-[3rem] bg-[#F4F2F2] border border-[#F4F2F2] rounded-lg'>
                    <p className='flex items-center m-auto text-center font-[Satoshi]  text-[18px] gap-[10px] justify-center text-[#999999] my-auto '> <CiSearch />Search</p>
                </div>
                <div className='flex px-[2rem] w-full justify-between h-[3rem] items-center m-auto bg-[#FFFFFF] shadow-2xl shadow-white border border-[#FFFFFF] rounded-lg'>
                    <p className='font-[Satoshi] font-[400] text-[15px] md:text-[18px] leading-[20px] md:leading-[37px]'>See 1-6 of 15 results</p>
                    <p className='w-[6rem] flex h-[2rem] font-[Satoshi] font-[500] text-[18px] leading-[37px] justify-center items-center border border-[#000000] rounded'>Sort by <MdOutlineKeyboardArrowDown /> </p>
                </div>
            </div>
            <Filter/>
            <p className='font-[Satoshi] font-[500] text-[18px] leading-[20px] w-[8rem] flex m-auto h-[2rem] mt-[5rem] items-center text-center justify-center border border-[black] rounded'>See more</p>
        </div >
    );
}

// export async function getStaticProps(){

//     const res = await fetch('', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             query: `
//             query HomePageQuery {
//               posts {
//                 nodes {
//                   slug
//                   title
//                 }
//               }
//             }
//             `,
//         })
//     })
  
//     const json = await res.json()
  
//     return {
//       props: {
//           posts: json.data.posts,
//       },
//     }
  
//   }
