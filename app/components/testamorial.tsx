import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <>
            <main id='testimonials' className='dark:bg-black'>
                <h1 className='text-center dark:text-white text-2xl md:text-3xl text-[#FF423B] lg:text-4xl font-bold py-4 md:py-6 lg:py-8'>Testimonial</h1>
                <div className="w-[90%] max-w-2xl mt-6 md:mt-8 lg:mt-10 mx-auto dark:bg-black bg-white rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10">
                    <h1 className='text-center dark:text-[#ffffff] text-2xl font-bold my-4'>Why Our Clients Choose Us</h1>
                    <div className="flex justify-center">
                        <Image
                            className="rounded-lg w-[275px] h-[183px] sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover shadow-lg"
                            src="/user.png"
                            alt="profile"
                            width={275}
                            height={183}
                            priority
                        />
                    </div>
                    <div className="text-center mt-4">
                        <h2 className="text-xl sm:text-2xl md:text-[25px] font-bold dark:text-white">Henrry Jo</h2>
                        <p className="text-red-500 text-base sm:text-lg md:text-[18px]">(long established)</p>
                    </div>
                    <div className="text-center mt-4 dark:text-white text-gray-600 text-base sm:text-lg md:text-[18px] px-4 sm:px-6 md:px-10 pb-6 sm:pb-8">
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
                            normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it
                            look
                        </p>
                    </div>
                </div>
                <div className="flex justify-center mt-10 mb-4">
                    <div className="flex space-x-3">
                        <span className="w-4 h-4 border-2 dark:border-white border-black bg-red-500 rounded-full"></span>
                        <span className="w-4 h-4 border-2 dark:border-white border-black rounded-full"></span>
                        <span className="w-4 h-4 border-2 dark:border-white border-black rounded-full"></span>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Testimonial



