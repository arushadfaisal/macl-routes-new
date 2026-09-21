import { useState } from 'react'
import TimeCard from './components/ui/timeCard'
import BottomNavBar from './components/layout/bottomNavBar'

function App() {

  return (
    <>
      <TimeCard route="Route 1" previousTime="10:00" nextTime="10:30" nextNextTime="11:00" />
      <TimeCard route="Route 2" previousTime="11:00" nextTime="11:30" nextNextTime="12:00" />
      <TimeCard route="Route 3" previousTime="12:00" nextTime="12:30" nextNextTime="13:00" />

      <BottomNavBar />
    </>
  )
}

export default App
