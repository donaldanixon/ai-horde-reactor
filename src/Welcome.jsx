import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'
import Image1 from './assets/1.jpg'
import Image2 from './assets/2.png'
import Image3 from './assets/3.png'
import Image4 from './assets/4.png'
import Image5 from './assets/5.png'
import Image6 from './assets/6.png'
import Image7 from './assets/7.png'
import Image8 from './assets/8.png'
import Image9 from './assets/9.png'

function Welcome() {

  return (
    <>
      <div className='Background'>
        <div className="Slider" style={{ "--quantity": 9 }}>
          <div className="Item" style={{ "--position": 1 }}><img src={Image1} alt="" /></div>
          <div className="Item" style={{ "--position": 2 }}><img src={Image2} alt="" /></div>
          <div className="Item" style={{ "--position": 3 }}><img src={Image3} alt="" /></div>
          <div className="Item" style={{ "--position": 4 }}><img src={Image4} alt="" /></div>
          <div className="Item" style={{ "--position": 5 }}><img src={Image5} alt="" /></div>
          <div className="Item" style={{ "--position": 6 }}><img src={Image6} alt="" /></div>
          <div className="Item" style={{ "--position": 7 }}><img src={Image7} alt="" /></div>
          <div className="Item" style={{ "--position": 8 }}><img src={Image8} alt="" /></div>
          <div className="Item" style={{ "--position": 9 }}><img src={Image9} alt="" /></div>
        </div>
        <div className="overlayContainer">
          <div className="PreHeader">POWERED BY THE AI HORDE</div>
          <div className="Tagline">FREE AI ART/TEXT</div>
          <div className="Blurb">
            Crowdsourced distributed workers bringing AI art & text generation to the masses for free. If you like the service consider <a href='https://github.com/Haidra-Org/AI-Horde/blob/main/README_StableHorde.md#joining-the-horde' target='_blank'>joining the horde</a>.
          </div>
          <div className="GetStartedContainer"> 
            <Link to="/create"><button className='GetStartedButton'>Start Generating</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
