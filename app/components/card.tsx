import React from 'react'
import Image from 'next/image'
import { CardProps } from '../types/allTypes'
const Card = (Props: CardProps) => {
    return (
        <>
            <main className='w-[300px] h-auto  px-4 py-3 pb-5'>
                <div className=''>
                    <Image src={Props.image} alt="food" width={Props.imageW} height={Props.imageH} />
                </div>
                {/* heading */}
                <div className=''>
                    <h1 className='text-[#262625] md:text-[18px] mt-4  font-bold'>{Props.heading}</h1>

                </div>
                {/* description */}
                <div>

                    <p className='text-[#333333]  mt-2 text-[14px]'>{Props.description}</p>
                </div>

            </main>
        </>
    )
}

export default Card
