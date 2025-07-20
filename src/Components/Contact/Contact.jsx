import React from 'react'
import './Contact.css'
import call_icon from '../../assets/call.png'
import location_icon from '../../assets/location.png'
import mail_icon from '../../assets/mail.png'
import connect from '../../assets/connect.png'


const Contact = () => {

//     // const onSubmit = async (event) => {
//     // event.preventDefault();
//     // const formData = new FormData(event.target);

//     // formData.append("access_key", "eae3bcc9-8f3c-4b1f-8429-e9b28e5ca4d5");

//     // const object = Object.fromEntries(formData);
//     // const json = JSON.stringify(object);

//     // const res = await fetch("https://api.web3forms.com/submit", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //     Accept: "application/json"
//     //   },
//     //   body: json
//     // }).then((res) => res.json());

//     // if (res.success) {
//     //   alert(res.message);
//     // }
// onSubmit={onSubmit}
//   };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>

        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm Currently available to take new opportunity and collab with projects, so feel free to send me message. You can contact Anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                       <img src={mail_icon} alt="mail" style={{ width: "35px", height: "35px" }} /> <p>kandhan.apac@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="callicon" style={{ width: "35px", height: "35px" }} /> <p>+91 - 8072749845</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="location" style={{ width: "35px", height: "35px" }} /> <p>Gingee, Viluppuram.</p>
                    </div>
                </div>
            </div>
            {/* <form  className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write Your Message here</label>
                <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form> */}
        <div className="card-component">
                <img src={connect} alt="connect-img" style={{width:"40px",height:"40px"}} />
                <h2 className="">Connect With Me</h2>
                <p className="">I'd love to hear from you. Feel free to reach out via email!</p>
                <a href="mailto:kandhan.apac@gmail.com" className='email-button'>Email Me</a>
        </div>
            
        </div>
        
        
    </div>
  )
}

export default Contact