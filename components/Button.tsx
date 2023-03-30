import React from 'react';
interface Props {
  text: string;
}
const Button: React.FC<Props> = ({ text }) => {
    return (
    <div>
      <button type="submit" className='bg-[#3341C1] w-[20rem] font-[500] text-[25px] font-[Satoshi] text-[#ffffff] h-[4rem]'>{text}</button>
    </div>
  );
}

export default Button;
