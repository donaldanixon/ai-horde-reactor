import React from 'react'
import './HordeOffline.css'
import broken from './assets/broken.webp'

function HordeOffline() {
    return (
      <>
        <div className="HordeOfflineContainer">
          <img src={broken} className="HordeOfflineImage" />
          <div className="HordeOfflineText">
            Sorry, the AI Horde is currently unavailable
          </div>
        </div>
      </>
    )
  }
  
  export default HordeOffline