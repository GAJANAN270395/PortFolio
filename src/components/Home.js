import React from 'react';
import "./home.css";
// import myPic from "../assets/images/Gajanan.jpg"
const Home = () => {
  return (
    <div className="homeDiv">
      <h1 className="heading">
        &nbsp; Home &nbsp;
        <hr />
      </h1>
      <div className="homeInner">
        <div className="homeLeft">
          <h2>Hello Visitor, My Name is </h2>
          <h2 className="homeName">
            <span>G</span>
            <span>a</span>
            <span>j</span>
            <span>a</span>
            <span>n</span>
            <span>a</span>
            <span>n</span>&nbsp;
            <span>K</span>
            <span>e</span>
            <span>n</span>
            <span>d</span>
            <span>r</span>
            <span>e</span>
          </h2>
          <h2 className="techStacks">Welcome to my Portfolio</h2>
          <h2>I am a Passionate & Enthusiastic Developer</h2>
          <h2 className="techStacks">ReactJS || NodeJS || ExpressJS</h2>
          <div>
            <a className="homeLinks" href="#about">
              Lets Get Started
            </a>
            <a className="homeLinks">Download Resume</a>
          </div>
        </div>
        <div className="homeRight">
          <img  alt="MY PIC"></img>
        </div>
      </div>
    </div>
  );
};
export default Home;
