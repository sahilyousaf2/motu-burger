'use client'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <main className='mt-4 md:mt-[90px] mx-auto max-w-[600px] md:max-w-[1170px] grid grid-cols-1 md:grid-cols-[290px_640px] gap-8 px-4 bg-white dark:bg-black'>
                <div className='image flex justify-center md:justify-start bg-white dark:bg-black'>
                    <Image src="/banner-img.png" alt="hero" width={510} height={276} className='w-full h-auto max-w-[300px] md:max-w-[350px]' priority />
                </div>
                <div className="text text-center md:text-left md:ml-20 ml-0 bg-white dark:bg-black">
                    <h1 className='text-3xl md:text-5xl text-[#262625] dark:text-white font-bold pb-2'>Food Delivery</h1>
                    <p className='text-[#333333] text-[14px] text-center dark:text-white md:text-left w-full md:w-auto mx-auto md:mx-0'>Search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.</p>
                    <div className='w-full md:w-[580px] md:h-[90px] flex items-center'>
                        {/* city */}
                        <div className="flex flex-col md:flex-row w-full gap-4 mt-6">
                            <div className="relative w-full md:w-1/3 shadow-lg">
                                <select className="cursor-pointer w-full px-4 py-2 border appearance-none bg-white dark:bg-black focus:outline-none focus:border-[#FF423B] rounded-md" defaultValue="">
                                    <option value="" disabled selected>Select City</option>
                                    <option value="karachi">Karachi</option>
                                    <option value="lahore">Lahore</option>
                                    <option value="islamabad">Islamabad</option>
                                    <option value="peshawar">Peshawar</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {/* restaurant */}
                            <div className="relative w-full md:w-1/3 shadow-lg">
                                <div>
                                    <select className="cursor-pointer w-full px-4 py-2 border appearance-none bg-white dark:bg-black focus:outline-none focus:border-[#FF423B] rounded-md" defaultValue="">
                                        <option value="" disabled>Restaurant</option>
                                        <option value="kfc">KFC</option>
                                        <option value="mcdonalds">McDonald&apos;s</option>
                                        <option value="burger-king">Burger King</option>
                                        <option value="subway">Subway</option>
                                    </select>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {/* food */}
                            <div className="relative w-full md:w-1/3 shadow-lg">
                                <select className="cursor-pointer w-full px-4 py-2 border appearance-none bg-white dark:bg-black focus:outline-none focus:border-[#FF423B] rounded-md" defaultValue="">
                                    <option value="" disabled>Food</option>
                                    <option value="burger">Burger</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="sandwich">Sandwich</option>
                                    <option value="salad">Salad</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 flex justify-center md:justify-start'>
                        <button className='bg-[#FF423B] text-white px-5 font-semibold py-2 rounded-md hover:bg-[#ff7672] transition-colors'>Search Now</button>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Hero          