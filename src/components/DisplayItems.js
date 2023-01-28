import React from 'react'
import About from './About'
import Home from './Home'
const DisplayItems = () => {
  return (
      <div className='itemsDiv'>
          <div className='displayItem' id='home'>
              <Home />
          </div>
          <div className='displayItem' id='about'>
                <About />
            </div>
      </div>
  )
}

export default DisplayItems