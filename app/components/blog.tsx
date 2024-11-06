import React from 'react'
import CardBlogs from './card-blogs'

const Blog = () => {
    return (
        <>
            <main className='min-h-[430px] w-full px-4 mt-[100px] py-8 md:py-0 dark:bg-black' id='blogs'>
                <div className='max-w-[600px] mx-auto md:max-w-[1170px]'>
                    <div className='text-center font-bold text-[24px] md:text-[40px] dark:text-[#ffffff]'>
                        <h2 >Cafes & Restaurants</h2>
                    </div>
                    <div className='text-[#333333] dark:text-white  md:text-[14px] text-[12px]  mt-[10px] text-center'>
                        <p>Search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                    </div>
                    <div className='grid grid-cols-1 w-full md:w-[1170px] mx-auto md:grid-cols-3 gap-4 mt-[30px]'>
                        {/* card 1 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using
                            Lorem Ipsum is that it has alooking at
                            its layout. The point of using Lorem
                            Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/zinger.png'
                            />
                        </div>
                        {/* card 2 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using
                            Lorem Ipsum is that it has alooking at
                            its layout. The point of using Lorem
                            Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/beef.png'
                            />
                        </div>
                        {/* card 3 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using
                            Lorem Ipsum is that it has alooking at
                            its layout. The point of using Lorem
                            Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/roll.png'
                            />
                        </div>
                        {/* card 4 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using
                            Lorem Ipsum is that it has alooking at
                            its layout. The point of using Lorem
                            Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/fish.png'
                            />
                        </div>
                        {/* card 5 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using
                            Lorem Ipsum is that it has alooking at
                            its layout. The point of using Lorem
                            Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/sweet.png'
                            />
                        </div>
                        {/* card 6 */}
                        <div>
                            <CardBlogs
                                heading='Burger House'
                                description='looking at its layout. The point of using
                            Lorem Ipsum is that it has alooking at
                            its layout. The point of using Lorem
                            Ipsum is that it has a'
                                day='Monday - Saturday'
                                time='09:00 - 18:00'
                                image='/sweet2.png'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center md:w-[1170px] mx-auto mt-[30px]'>
                    <button className='bg-[#FF423B] w-[140px] h-[40px] hover:bg-[#ff7672] text-white px-8 py-2 '>See More</button>
                </div>
            </main>
        </>
    )
}

export default Blog
