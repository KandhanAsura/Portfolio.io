import React from 'react'
import './Hero.css'
import profile from '../../assets/Profile.jpg' // Assuming you have a profile image in the assets folder
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home'  className='hero'>
     <img src={profile} alt="" />
        <h1> <span>I'm Kandhan P,</span> Full Stack Web Developer</h1>
        <p>I'm a Full Stack Web Developer from Viluppuram, India</p>

        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume"><a href="/Portfolio.io/Resume.pdf"><button className='button'>My Resume</button></a></div>
        </div>

    </div>
  )
}

export default Hero