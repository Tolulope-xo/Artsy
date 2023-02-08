
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HiBars2 } from 'react-icons/hi2';
import notify from '../components/assets/Ellipse 3.png'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  const handleToggle = () => {
    setNavbar(!navbar);
  };
  const cart = useSelector((state) => state.cart);
  const notify1 = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };


    const appRoute = useRouter()
    return (
      <nav className="w-full  bg-white shadow">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <h2 className="text-2xl m-[auto] w-100vw text-center md:text-left font-[Stix] md:m-0 text-black font-bold">ARTSY.</h2>
            </a>
            <div className="block md:hidden">
              <button
                className="p-2 text-black"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <AiOutlineClose className="sm:absolute md:relative sm:left-[0] top-[0] text-[25px] text-black " />

                ) : (
                  <HiBars2 className="absolute md:relative right-[5rem] top-[1rem] text-[25px] text-black left-[5px]" />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex w-[20rem] md:flex-row md:items-center justify-self-center pb-3 mt-8 md:pb-0 md:mt-2 ${navbar ? 'block md:flex' : 'hidden md:flex'
                }`}
            >
              <ul className="items-center justify-between w-[20rem] space-y-8 md:space-y-0 block md:flex ">
                <li className="text-[black] ">
                  <Link href='/home' onClick={handleToggle} className={appRoute.pathname == "/home" ? "md:border-b-2 md:border-[black] color-[#292929]" : "color-[#292929] no-underline font-[Satoshi]"}>
                    Home                  </Link>
                </li>
                <li className="text-[black]">
                  <Link href="/marketplace" onClick={handleToggle} className={appRoute.pathname == "/marketplace" ? "md:border-b-2 md:border-[black] color-[#292929]" : "color-[#292929] no-underline font-[Satoshi]"}>
                    Marketplace                   </Link>
                </li>
                <li className="text-[black]" >
                  <Link href="/auctions" onClick={handleToggle} className={appRoute.pathname == "/auctions" ? "md:border-b-2 md:border-[black] color-[#292929]" : "color-[#292929] no-underline font-[Satoshi]"}>
                    Auctions                    </Link>
                </li>
                <li className="text-[black]">
                  <Link href="/drop" onClick={handleToggle} className={appRoute.pathname == "/drop" ? "md:border-b-2 md:border-[black] color-[#292929]" : "color-[#292929] no-underline font-[Satoshi]"}>
                    Drop                    </Link>
                </li>
              </ul>

            </div>

          </div>
          <div className="flex w-[5rem] absolute top-[15px] md:top-[0] right-[0] md:relative  md:w-[10rem] justify-around">
            <i className='text-[25px]'><AiOutlineSearch /></i>
            <Link className='absolute' href="/cart" >
              <i className='text-[25px]'><AiOutlineShoppingCart /></i>
              <Image {...notify1()} className={`${notify1() ? 'block top-[-2px] absolute right-0' : 'hidden'}`} src={notify} alt='product' />
            </Link>
            <i className='text-[25px] hidden md:block'><IoMdNotificationsOutline /></i>
          </div>
        </div>
      </nav>
    );
  }
