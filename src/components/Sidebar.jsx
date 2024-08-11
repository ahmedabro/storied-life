import React from 'react'
import logo from '../assets/images/logo.png'
import ThemeButton from './ThemeButton'

const Sidebar = () => {
  return (
    <div className='md:flex md:justify-between lg:block md:items-center lg:w-[15%] p-2 lg:h-screen'>
      <div className='flex justify-center items-start lg:h-[20%] py-5'>
        <img src={logo} alt="logo" className='w-[150px] md:w-auto' />
      </div>
      <div className='flex flex-col sm:flex-row lg:flex-col gap-2 md:gap-3 lg:gap-5 h-[200px] sm:h-auto lg:h-[65%]'>
        <ThemeButton marginTop="mt-0" text="Dashboard" />
        <ThemeButton marginTop="mt-0" text="Subscribers" />
        <ThemeButton marginTop="mt-0" text="Settings" />
        <ThemeButton marginTop="mt-auto" text="Logout" />
      </div>
    </div>
  )
}

export default Sidebar
