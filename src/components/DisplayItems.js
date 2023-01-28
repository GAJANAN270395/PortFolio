import React from 'react'
import About from './About'
import Home from './Home'
import Resume from '../components/Resume/Resume'
const DisplayItems = () => {
  return (
      <div className='itemsDiv'>
          <div className='displayItem' id='home'>
              <Home />
          </div>
          <div className='displayItem' id='about'>
                <About />
            </div>
            <div className='displayItem'>
                <Resume />
            </div>
      </div>
  )
}

export default DisplayItems