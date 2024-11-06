import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Services from './components/services'
import About from './components/about'
import Blog from './components/blog'
import Testamorial from './components/testamorial'
import Footer from './components/footer'
const Home = () => {
  return (
    <>
      <div className='bg-white dark:bg-black'>
        <Header />
        <Hero />
        <Services />
        <About />
        <Blog />
        <Testamorial />
        <Footer />
      </div>
    </>
  )
}

export default Home
