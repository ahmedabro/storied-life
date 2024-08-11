import React from 'react'
import { useContext } from 'react'
import { SubscriberContext } from '../App'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BarGraph = () => {

    const subscribers = useContext(SubscriberContext)

  return (
    <div className='w-full sm:w-[75%] relative'>
        <label className='block writing-mode absolute left-[-10px] text-center h-full text-[#5C5B59] font-bold text-base mt-2'>No. of Participants</label>
        <ResponsiveContainer width="100%" height={500}>
            <BarChart
            width={500}
            height={300}
            data={subscribers}
            >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="participants" fill="#040450" margin activeBar={<Rectangle fill="#5E22CE" stroke="#72C4FF" strokeWidth="4px" />} />
            </BarChart>
        </ResponsiveContainer>
        <label className='block text-center text-[#5C5B59] font-bold text-base mt-2'>My Subscribers</label>
    </div>
  )
}

export default BarGraph
