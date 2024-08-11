import React from 'react'

const ThemeButton = ({marginTop, text}) => {
  return (
    <button className={`bg-[#040450] text-white w-full rounded-[10px] text-sm md:text-base xl:text-[25px] font-bold py-2 lg:py-3 md:px-5 flex justify-center items-center ${marginTop}`}><span>{text}</span></button>
  )
}

export default ThemeButton
