import Button from '../components/Button'
import { MdCheckBox } from 'react-icons/md';
import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { collection, addDoc } from "firebase/firestore";

import { db } from '../firebase';
interface Props {
    country: string;
  }
  const Information: React.FC<Props> = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState()
    const [number, setNumber] = useState()
    const [city, setCity] = useState('')
    const [wallet, setWallet] = useState('')
    const [emailError, setEmailError] = useState('')

    const [country, setCountry] = useState('')
    // const [isValid, setIsValid] = useState(false);
    const options = useMemo(() => countryList().getData(), [])
    // const handleEmailChange = (e) => {
    //     const emailRegex = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    //     setEmail(e.target.value);
    
    //     if (emailRegex.test(e.target.value)) {
    //       setIsValid(true);
    //     } else {
    //       setIsValid(false);
          
    //     }
    //   }
    const changeHandler = country => {
        setCountry(country)
    }
    const addTodo = async (e) => {
        e.preventDefault()
        // if (isValid) {
        //     // form is valid, do something
        //     console.log('Form submitted!');
        //   } else {
        //     // form is invalid, show error message
        //     console.error('Please enter a valid email!');
        //     setEmailError('')
        //   }

        try {
            const docRef = await addDoc(collection(db, "collections"), {
                name: name,
                email: email,
                number: number,
                code: code,
                city: city,
                wallet: wallet,
                country: country,
            });
            console.log("Document written with ID: ", docRef.id);
            alert('Shipping details submitted!')
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    return (
        <form onSubmit={addTodo} className='w-[100%] px-[3rem] max-w-[50%] ' >
            <div className='w-[30rem]' >
                <div>
                    <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Your Email</p>
                    <input className='w-[30rem] outline-none mb-[1rem] h-[3rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]' value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        // onChange={handleEmailChange}
                        placeholder='aanuoluwateenah@gmail.com' />
                       <p>{emailError}</p> 
                    <div className='flex items-center mb-[1rem]'> <MdCheckBox /><p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Get updates about new drops & exclusive offers</p>
                    </div>
                </div>
                <div>
                    <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Your Full Name</p>
                    <input className='w-[30rem] mb-[1rem] outline-none h-[3rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]' value={name}
                        placeholder='Anuoluwapo Bamisaye'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Choose a wallet</p>
                    <input className='w-[30rem] mb-[1rem] outline-none h-[3rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]' placeholder='Anuoluwapo Bamisaye' value={wallet}
                        onChange={(e) => setWallet(e.target.value)}
                    />
                </div>
                <div>
                    <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>City</p>
                    <input className='w-[30rem] mb-[1rem] outline-none h-[3rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]' value={city}
                        placeholder='City'
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className='flex gap-[1rem]'>
                    <div>
                        <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Country</p>

                        <Select
                            className='w-[14rem] h-[3rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]'
                            placeholder="Country"
                            options={options}
                            value={country}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Postal Code</p>
                        <input className='w-[15rem] mb-[1rem] outline-none h-[3rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]' value={code} onChange={(e) => setCode(e.target.value)} placeholder='001001' />
                    </div>
                </div>
                <div>
                    <p className='font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] '>Phone Number</p>
                    <input className='w-[30rem] mb-[1rem] outline-none h-[3rem] border pl-[2rem] border-[#747474] font-[Satoshi] font-[400] text-[20px] text-[#888888] leading-[35px] rounded bg-[#F2F2F2]' placeholder='0812 3456 785' value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>
            </div>
        <div className='flex flex-col items-center justify-between'>
                <Button  text='Proceed to Payment' />
            </div>
        </form>
    );
}

export default Information;
