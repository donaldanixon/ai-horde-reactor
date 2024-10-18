import React from 'react'
import './HordeOnline.css'
import PromptArea from './PromptArea.jsx'
import ReviewArea from './ReviewArea.jsx'
import { FetchUser } from './scripts/horde-data-fetch'

function HordeOnline() {
  const [loggedInUserAPIKey, setLoggedInUserAPIKey] = React.useState(localStorage.getItem('loggedInUser') || 'WFwY0H1iA9QZtIbo7IpORw')
  const [userName, setUserName] = React.useState('')
  const [kudosCount, setKudosCount] = React.useState(0)


  FetchUser(loggedInUserAPIKey).then(data => {
    console.log(data);
    if (data !== false) {
      setUserName(data.username)
      setKudosCount(data.kudos)
    }
  });

  return (
      <>
        <div className="GenerationContainer">
            <PromptArea />
            <ReviewArea />
          <div className="InfoFooter">
            {loggedInUserAPIKey === '0000000000' ? 'Not logged in to AI Horde' : 'Currently logged in as ' + userName + ' with ' + kudosCount + ' kudos'}
          </div>
        </div>
      </>
    )
  }
  
  export default HordeOnline