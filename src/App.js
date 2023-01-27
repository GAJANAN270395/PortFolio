import React from "react";
import './App.css';
import DisplayItems from './components/DisplayItems';

const App =()=>{
  return(
    <div className='outerDiv'>
     <div className='navigation'>
  <div className='App-logo'></div>
     <h3>GAK</h3>
     </div>
     <div className="navItem">
       <a href='#home'>
         <h1>🏠</h1>
         <p>Home</p>
       </a>
     </div>
     <div className='navItem'>
          <a href='#about'>
            <h1>🧑</h1>
            <p>About</p>
          </a>
        </div>
        <div className='navItem'>
          <a href='#resume'>
            <h1>👨🏽‍🎓</h1>
            <p>Resume</p>
          </a>
        </div>
        <div className='navItem'>
          <a href='#projects'>
            <h1>🛠</h1>
            <p>Projects</p>
          </a>
        </div>
        <div className='navItem'>
          <a href='#contactMe'>
            <h1>📞</h1>
            <p>Contact Me</p>
          </a>
        </div>
    </div>
  )
}
export default App;