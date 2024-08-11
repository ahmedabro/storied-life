import React from 'react'
import inviteIcon from '../assets/images/invite.png'
import Banner from './Banner'
import SubscribersList from './SubscribersList'
import BarGraph from './BarGraph'
import TotalSubscribersBox from './TotalSubscribersBox'

const MainView = () => {
  return (
    <div className='bg-[#f0f0f4] md:w-full lg:w-[65%] px-3 md:px-10 rounded-[15px] py-5'>
      <div className='sm:flex justify-between items-center mb-6 md:mb-3'>
        <div className='mb-4 md:mb-0'>
            <h2 className='text-[#040450] font-bold text-xl md:text-2xl xl:text-3xl'>Al-Haram Funeral Hall</h2>
            <h5 className='text-[#5C5B59] font-bold text-base md:text-lg xl:text-xl'>April 20, 2024</h5>
        </div>
        <button className='flex items-center justify-center w-full sm:w-auto gap-2 lg:gap-3 bg-[#5E22CE] py-2 lg:py-2 xl:py-3 px-4 xl:px-6 rounded-[10px]'><img className='w-6 md:w-8 md:h-auto lg:w-auto lg:h-auto' src={inviteIcon} alt="icon" /> <span className='text-white font-bold text-sm md:text-base xl:text-[25px]'>Invite Subscriber</span></button>
      </div>
      <Banner />
      <div className='sm:flex items-start my-10'>
        <BarGraph />
        <TotalSubscribersBox />
      </div>

      <SubscribersList />
    </div>
  )
}

export default MainView
