'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { ModeToggle } from './theme-btn'
const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <header className=" shadow-lg   ">
                <main className='max-w-[600px] mx-auto md:max-w-[1170px] py-4 bg-white dark:bg-black'>


                    <nav className="flex items-center justify-between px-4">
                        <div className="text-2xl font-bold">
                            <Link href={"/"}>
                                <h1 className='text-2xl font-bold text-[#FF423B]'>MOTU BURGER</h1>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="hover:text-[#FF423B]">{">"}Home</Link>
                            <Link href="/#Services" className="hover:text-[#FF423B]">{">"}Services</Link>
                            <Link href="/#about" className="hover:text-[#FF423B]">{">"}About</Link>
                            <Link href="/#blogs" className="hover:text-[#FF423B]">{">"}Blogs</Link>
                            <Link href="/#testimonials" className="hover:text-[#FF423B]">{">"}Testimonial</Link>
                            <ModeToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {isOpen && (
                            <div className="absolute dark:bg-black top-16 left-0 right-0 bg-white shadow-md md:hidden">
                                <div className="flex flex-col items-center py-4 space-y-4">
                                    <Link href="/" className="hover:text-gray-600">Home</Link>
                                    <Link href="/#about" className="hover:text-gray-600">About</Link>
                                    <Link href="/#Services" className="hover:text-gray-600">Services</Link>
                                    <Link href="/#blogs" className="hover:text-gray-600">Blogs</Link>
                                    <Link href="/#testimonials" className="hover:text-gray-600">Testimonial</Link>
                                    <ModeToggle />
                                </div>
                            </div>
                        )}
                    </nav>
                </main>
            </header>

        </>
    )
}

export default Header
