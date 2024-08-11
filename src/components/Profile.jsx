import React from 'react'
import profileImage from '../assets/images/profile.png'
import dots from '../assets/images/dots.png'

const Profile = () => {
  return (
    <div className='lg:w-[20%] py-5 px-8'>
      <h2 className='text-center font-bold text-xl md:text-2xl xl:text-3xl text-[#040450] mb-[50px] lg:mb-[25%]'>My Profile</h2>
      <div className='flex justify-center relative mb-3'>
        <img src={profileImage} alt="profile image" className='w-[100px] lg:w-[65%]' />
        <div className='absolute w-[200px] lg:w-full z-[-1] top-[-25%]'>
            <img src={dots} alt="" />
        </div>
      </div>
      <h5 className='text-center font-bold text-lg lg:text-xl text-black'>Karim ABC</h5>
      <a className='block text-center text-[#5C5B59] font-bold text-sm xl:text-base' href='mailto:kareem@alharam.com'>kareem@alharam.com</a>
    </div>
  )
}

export default Profile
