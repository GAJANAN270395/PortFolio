import React, { useState } from 'react';
import DisplayResume from './DisplayResume';
import './Resume.css';
// import sepLine from '../../assets/images/vertical-line.png'
const Resume = () => {
  const [choice, setChoice] = useState('Education');

  return (
    <div className="resume-outerDiv" id="resume">
      <h1 className="resume-heading">
        {' '}
        &nbsp; Resume &nbsp; <hr />
      </h1>
      <div className="resume-innerDiv">
        <div className="resume-leftDiv">
          <ul className="resume-list">
            <li
              onClick={() => {
                setChoice('Education');
              }}
            >
              Education 🎓
            </li>
            <li
              onClick={() => {
                setChoice('Experience');
              }}
            >
              Work Experience 💼
            </li>
            <li
              onClick={() => {
                setChoice('Skills');
              }}
            >
              Programming Skills 👨‍💻
            </li>
            <li
              onClick={() => {
                setChoice('Interests');
              }}
            >
              Interests 🎤
            </li>
          </ul>
        </div>
        <div className="resume-middleDiv">
          <img
            src="https://stackblitz.com/files/react-7uewqi/github/GAJANAN270395/PortFolio/main/src/assets/images/vertical-line.png"
            alt="sepImage.jpg"
          ></img>
        </div>
        <div className="resume-rightDiv">
          <div className="data-holderDiv">
            <DisplayResume choice={choice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
