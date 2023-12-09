import React, { useState } from 'react'
import HeroSection from '../Components/HeroSection'
import Jobs from '../Components/Jobs'
import { Link } from 'react-router-dom'
import { BsArrowUpRight } from 'react-icons/bs'
import TestimonialSlider from '../Components/TestimonialSlider'
import { Helmet } from "react-helmet-async"
const Home = () => {
  const [search, setSearch] = useState('')
  const searchData = (searchtext) => {
    const makelower = searchtext.toLowerCase()
    setSearch(makelower)
  }
  return (
    <div>
       <Helmet>
                <title>Upwork | Home </title>
        </Helmet>
      <div>
        <HeroSection searchData={searchData}> </HeroSection>

      </div>
      <Jobs itemsCount={9} search={search}> </Jobs>


      <div className=' container lg:w-[90%] mx-auto px-4 mb-14'>
        <div className=' bg-cover bg-none bg-center  p-6 lg:p-10 rounded-md ' style={{ backgroundImage: `url('https://i.ibb.co/gR1kjXR/h18-banner.jpg')` }}>
          <h1 className='text-4xl text-black font-medium'>We Are Hiring</h1>
          <p className='text-base text-textColor font-normal py-3'>Let’s Work Together & Explore Opportunities</p>
          <Link className='text-base bg-primery hover:bg-transparent hover:bordder hover:border-primery border px-8 py-3 mt-1  rounded-lg duration-300 text-white font-normal hover:text-primery inline-block'> <span className='flex gap-2'>Apply Now  <BsArrowUpRight> </BsArrowUpRight> </span></Link>
        </div>
      </div>
      <TestimonialSlider> </TestimonialSlider>
    </div>
  )
}
export default Home