import React from 'react'
import "./Footer.css"
// import man_icon from '../../assets/man.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <p style={{ fontWeight: "bold" }}>© 2025 KANDHAN. All rights reserved.</p> */}
                <p>Full Stack Web Developer | JavaScript • Python • Django • React • MySQL</p>
                <br />
                <h2 style={{ fontWeight: "bold" }}>© 2025 KANDHAN. All rights reserved.</h2>
            </div>
            {/* <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={man_icon} alt="user-icon" style={{width:"25px", height:"25px"}} />
                    <input type="email" placeholder='Enter Your email' />
                </div>
                <div className="footer-subscribe">SubScribe</div>
            </div> */}
        </div>
        {/* <hr /> */}
        {/* <div className="footer-bottom">
            <p className="footer-bottom-left">

            </p>
        </div> */}
        
    </div>
  )
}

export default Footer