import React from 'react'
import Image from 'next/image'
import Card from './card'

const Services = () => {
    return (
        <div className="max-w-[600px] mx-auto md:max-w-[1170px] px-4 py-12" id='Services'>
            <h2 className="text-3xl md:text-4xl text-[#262625] dark:text-white font-bold mb-3">Popular Goods Foods</h2>
            <p className='text-[#333333] text-[14px] text-left dark:text-white md:w-auto mb-3 mx-auto'>Search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            <nav className='text-[#333333] font-bold text-[14px]' >
                <ul className='flex flex-wrap gap-4 md:gap-10'>
                    <li className='cursor-pointer w-[calc(50%-8px)] md:w-auto py-2 dark:text-white px-4 bg-gray-100 dark:bg-black rounded-lg hover:bg-[#FF423B] hover:text-white transition-colors'>Fastfood</li>
                    <li className='cursor-pointer w-[calc(50%-8px)] md:w-auto py-2 dark:text-white px-4 bg-gray-100 dark:bg-black rounded-lg hover:bg-[#FF423B] hover:text-white transition-colors'>Hot Pizza</li>
                    <li className='cursor-pointer w-[calc(50%-8px)] md:w-auto py-2 dark:text-white px-4 bg-gray-100 dark:bg-black rounded-lg hover:bg-[#FF423B] hover:text-white transition-colors'>Chapati Food</li>
                    <li className='cursor-pointer w-[calc(50%-8px)] md:w-auto py-2 dark:text-white px-4 bg-gray-100 dark:bg-black rounded-lg hover:bg-[#FF423B] hover:text-white transition-colors'>Biryani & Meat</li>
                </ul>
            </nav>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-[40px] mx-auto max-w-[1170px] bg-white dark:bg-black'>
                {/* card 1 */}
                <div className='w-full'>
                    <Card
                        imageW={235}
                        imageH={95}
                        image='/plater.png'
                        heading='Cheeseburger with Bacon'
                        description='Search for "lorem ipsum" will uncover many web sites still in their infancy.'
                    />
                    <button className='bg-[#FF423B] mt-[15px] text-white px-5 py-2 rounded-lg ml-4 hover:bg-[#ff7672]'>Read More</button>

                </div>
                {/* card 2 */}
                <div className='w-full'>
                    <Card
                        imageW={200}
                        imageH={107}
                        image='/roll.png'
                        heading='Dosa with Fishcake'
                        description='Search for "lorem ipsum" will uncover many web sites still in their infancy.'
                    />
                    <button className='bg-[#FF423B] mt-[2px] text-white px-5 py-2 rounded-lg ml-4 hover:bg-[#ff7672]'>Read More</button>
                </div>
                {/* card 3 */}
                <div className='w-full'>
                    <Card
                        imageW={200}
                        imageH={107}
                        image='/card3.png'
                        heading='Dosa with Fishcake'
                        description='Search for "lorem ipsum" will uncover many web sites still in their infancy.'
                    />
                    <button className='bg-[#FF423B] mt-[2px] text-white px-5 py-2 rounded-lg ml-4 hover:bg-[#ff7672]'>Read More</button>
                </div> 
                {/* card 4 */}
                <div className='w-full'>
                    <Card
                        imageW={125}
                        imageH={111}
                        image='/card4.png'
                        heading='Dosa with Fishcake'
                        description='Search for "lorem ipsum" will uncover many web sites still in their infancy.'
                    />
                    <button className='bg-[#FF423B] text-white   px-5 py-2 rounded-lg ml-4 hover:bg-[#ff7672]'>Read More</button>
                </div>
            </div>



        </div>
    )
}

export default Services
