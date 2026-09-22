import { useState } from 'react'
import TimeCard from './components/ui/timeCard'
import BottomNavBar from './components/layout/bottomNavBar'
import TopBar from './components/layout/topBar'



function App() {
  const [activeTab, setActiveTab] = useState('home')
  //const [mainContent, setMainContent] = useState(<div></div>)

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return(
          <div className="text-center text-2xl mt-20">
            <h1>About Page</h1>
            <p>This is the about page content.</p>
          </div>
        )

      case 'home':
        return(
          <div className="flex flex-col items-center justify-center">
            <TimeCard route="Route 1" previousTime="10:00" nextTime="10:30" nextNextTime="11:00" />
            <TimeCard route="Route 2" previousTime="11:00" nextTime="11:30" nextNextTime="12:00" />
            <TimeCard route="Route 3" previousTime="12:00" nextTime="12:30" nextNextTime="13:00" />
          </div>
        )

      case 'contact':
        return(
          <div className="text-center text-2xl mt-20">
            <h1>Contact Page</h1>
            <p>This is the contact page content.</p>
          </div>
        )
        
      default:
        return (<h1>Page Not Found</h1>)
    }
  }

  return (
    <>
      <TopBar />
      
      <main className="flex flex-col items-center justify-center mt-20">
        {renderContent()}
      </main>
      <BottomNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  )

  
}



export default App
