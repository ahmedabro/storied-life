import React from 'react'
import { useContext } from 'react'
import { SubscriberContext } from '../App'

const TotalSubscribersBox = () => {
    const subscribers = useContext(SubscriberContext)
  return (
    <div className='bg-white w-full mt-5 sm:mt-0 sm:w-[25%] py-7 rounded-[10px]'>
        <h3 className='text-center text-[#040450] font-bold lg:text-lg xl:text-xl lg:mb-4 xl:mb-8'>{subscribers.length}</h3>
        <h3 className='text-center text-[#040450] font-bold lg:text-lg xl:text-xl'>My Subscribers</h3>
    </div>
  )
}

export default TotalSubscribersBox
