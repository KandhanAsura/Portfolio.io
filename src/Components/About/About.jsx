import React from 'react'
import './About.css'
import Aboutimage from '../../Assets/about.png'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={Aboutimage} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <h2>Who I Am</h2>
            <p>
                I’m an enthusiastic fresher with a strong interest in web development and coding.
                I love creating clean, user-friendly websites and learning new tools and frameworks.
                I’m excited to grow my skills and contribute to a great team.
            </p>
            </div>
        
        <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "30%" }}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "40%" }}/></div>
            <div className="about-skill"><p>Python</p><hr style={{ width: "40%" }}/></div>
            <div className="about-skill"><p>Django</p><hr style={{ width: "30%" }}/></div>
            <div className="about-skill"><p>MYSQL</p><hr style={{ width: "40%" }}/></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About