import React from 'react'
import './Home.css'
import Header from './Header.jsx'
import HordeOffline from './HordeOffline.jsx'
import HordeOnline from './HordeOnline.jsx'
import HordeHealth from './scripts/horde-health'

/**
 * This component renders the home page of the application.
 * It checks the health status of the AI Horde and displays the appropriate content.
 */

function Home() {
  const [hordeHealthy, setHordeHealthy] = React.useState(false)

  React.useEffect(() => {
    HordeHealth().then(currentState => {
      if (currentState === true) {
        setHordeHealthy(true)
      }
    })
  }, [])

  return (
    <>
      <Header currentPage="Create"/>
      {hordeHealthy === true ? 
        <HordeOnline />
      : <HordeOffline />}
    </>
  )
}

export default Home
