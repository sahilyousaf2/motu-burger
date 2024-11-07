import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <main className='bg-[#FF423B] min-h-[430px] w-full px-4 mt-[100px] md:mt-[200px] py-8 md:py-0' id='about'>
            <div className='max-w-[600px] mx-auto md:max-w-[1170px] flex flex-col md:flex-row items-center'>
                <div className="image w-full md:w-auto flex justify-center md:justify-start">
                    <Image 
                        src="/about.png" 
                        height={430} 
                        width={450} 
                        alt='About Image'
                        className="w-[300px] md:w-[450px] h-auto object-contain" 
                    />
                </div>
                <div className="text mt-8 md:mt-0 md:ml-5 w-full md:w-auto">
                    <div>
                        <h1 className='font-bold text-2xl md:text-[40px] dark:text-[#262625] text-white text-center md:text-left'>About Us</h1>
                        <div className='max-w-[550px] text-sm md:text-[14px] dark:text-[#262625] text-white mt-4'>
                            <p className='text-center md:text-left'>
                                Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web page editors now use
                                Lorem Ipsum as their default model text, and a search for Content here, content
                                here', making it look like readable English.
                                Many desktop publishing packages and web page editors now use
                                Lorem Ipsum as their default model text, and a search for
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
