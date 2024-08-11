import './App.css'
import MainView from './components/MainView'
import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import { createContext, useState } from 'react'
import { SUBSCRIBERS } from './Data.js'

export const SubscriberContext = createContext()

const App = () => {

  const [subscribers, setSubsribers] = useState(SUBSCRIBERS)

  return (
    <>
      <SubscriberContext.Provider value={subscribers}>
      <div className='lg:flex'>
        <Sidebar />
        <MainView />
        <Profile />
      </div>
      </SubscriberContext.Provider>
    </>
  )
}

export default App
