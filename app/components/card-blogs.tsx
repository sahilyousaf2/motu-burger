import React from 'react';
import Image from 'next/image';
import { CardBlogsProps } from '../types/allTypes';
const BurgerCard = (Props: CardBlogsProps) => {
  return (
    <div className='card bg-white  mb-5 mt-5 rounded-[15px] w-[350px] h-[375px] shadow-lg p-5 text-center flex flex-col justify-center items-center'> 
      <Image
        src={Props.image}
        alt="Burger"
        width={131}
        height={102}
        className="mt-[21px] w-[131px] h-[102px]"
      />
      <h2 className='font-inter font-bold text-[30px] leading-[36px] text-[#ff423b] my-[10px] dark:text-[#262625]'>{Props.heading}</h2>
      <p className='font-inter font-bold text-[15px] leading-[18px] text-black  my-[5px]'>{Props.day}</p>
      <p className='font-inter font-bold text-[15px] leading-[18px] text-black  my-[5px]'>{Props.time}</p>
      <p className='font-inter font-normal text-[12px] leading-[15px] text-[#000000cc]  text-center my-[10px]'>
        {Props.description}
      </p>
      <button className='bg-[#FF423B] hover:bg-[#ff7672] text-white px-8 py-2'>Read More</button>
    </div>
  );
};


export default BurgerCard;

