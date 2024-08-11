import React from 'react'
import { useContext } from 'react'
import { SubscriberContext } from '../App'
import SubscriberBox from './SubscriberBox'


const SubscribersList = () => {
    const subscribers = useContext(SubscriberContext)
    // console.log(subscribers)
  return (
    <div>
        <h3 className='underline text-xl font-bold text-[#040450] mb-5'>Subscribers</h3>
        {
            subscribers.map(subscriber => (
                <SubscriberBox subscriber={subscriber} key={subscriber.id} />
            ))
        }
    </div>
  )
}

export default SubscribersList
