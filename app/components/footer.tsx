import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <main className='w-full min-h-[300px] bg-[#363636] dark:bg-[#333333] p-8'>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div className="about dark:text-white text-white">
                            <h1 className='text-2xl font-semibold uppercase'>About</h1>
                            <p className='max-w-[280px] mt-5 text-sm'>
                                It is a long established fact
                                that a reader will be
                                distracted by the readable
                                content of a page when
                                looking at its layout.
                                The point of using Lorem
                                Ipsum is that it has a more
                                or-less normal distribution
                            </p>
                        </div>

                        <div className="links dark:text-white text-white">
                            <h1 className='text-2xl font-semibold mb-6 uppercase'>Links</h1>
                            <ul className="space-y-2">
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link href={"/#about"}>About</Link>
                                </li>
                                <li>
                                    <Link href={"/#Services"}>Services</Link>
                                </li>
                                <li>
                                    <Link href={"/#blogs"}>Blogs</Link>
                                </li>
                                <li>
                                    <Link href={"/#testimonials"}>Testimonials</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="follow dark:text-white text-white">
                            <h1 className='text-2xl font-semibold mb-6 uppercase'>Follow us</h1>
                            <ul className="space-y-2">
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>LinkedIn</li>
                                <li>Instagram</li>
                            </ul>
                        </div>

                        <div className="newslatter dark:text-white text-white">
                            <h1 className='text-2xl font-semibold uppercase'>Newsletter</h1>
                            <input type="text"
                                placeholder='Enter Your Email'
                                className='px-4 py-[18px] w-full max-w-[255px] h-[55px] my-5'
                            />
                            <br />
                            <div className='my-5'>
                                <button className='py-4 px-10  hover:bg-[#ff7672] bg-[#FF423B]'>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link href={"/"}>
                            <button className='bg-[#FF423B] hover:bg-[#ff7672] text-white w-[130px] h-[40px] px-5 py-1 rounded-lg'>Top</button>
                        </Link>
                    </div>
                    <div className='text-center text-white mt-5'>
                        2024 All Rights Reserved @Sahil Yousaf
                    </div>
                </main>
            </footer>
        </>
    )
}

export default Footer
