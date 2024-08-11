import React from 'react'
import banner from '../assets/images/banner.jpg'

const Banner = () => {
  return (
    <div className='bg-[#04045099] rounded-[10px] block sm:flex items-center'>
      <img src={banner} className='w-full sm:w-auto' alt="" />
      <div className='px-4 md:px-5 xl:px-8 py-5 sm:py-0'>
        <h2 className='font-bold text-white text-lg md:text-xl xl:text-3xl mb-3'>
            <span className='text-[#72C4FF]'>Hello,</span> Welcome Storied Life Funeral Edition
        </h2>
        <p className='text-sm md:text-base xl:text-xl text-white font-bold'>
        Lets give some meaning to the life, where we celebrate achieve together
        </p>
      </div>
    </div>
  )
}

export default Banner
