import React, {useState} from 'react';

const useToggle = () => {
    const [toggle, setToggle] =useState()
    const handleToggle=()=>{
        setToggle(!toggle)
    }
  return [toggle, handleToggle];
}

export default useToggle