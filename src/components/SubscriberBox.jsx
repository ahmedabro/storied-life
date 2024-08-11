import React from 'react'
import subscriberImage from '../assets/images/sub_img.png'

const SubscriberBox = ({subscriber}) => {
  return (
    <div className='bg-[#c1c1d4] rounded-[10px] sm:flex justify-between items-center py-3 px-3 sm:px-7 mb-4'>
      <div className='flex items-center gap-2'>
        <img src={subscriberImage} alt="" />
        <div>
            <h4 className='text-[#040450] text-base font-bold'>{subscriber.name}</h4>
            <p className='text-[#5C5B59] text-xs font-bold'>{subscriber.email}</p>
        </div>
      </div>
      <div>
        <h4 className='text-end sm:text-center text-black text-base font-bold'>{subscriber.participants}</h4>
        <h6 className='text-end sm:text-center text-[#5C5B59] text-base font-bold'>Participants</h6>
      </div>
    </div>
  )
}

export default SubscriberBox
