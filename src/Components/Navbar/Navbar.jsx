import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/name.svg'
import underline from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_icon from '../../assets/menu.png'
import close from '../../assets/close.png'


const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="logo-img" />
      <img src={menu_icon} onClick={openMenu} alt="menu-icon" style={{width:"35px", height:"35px"}} className='nav-mob-menu'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={close} onClick={closeMenu} alt="" className="nav-mob-close" style={{width:"35px", height:"35px"}} />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt='' style={{width:"25px", height:"25px"}}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"? <img src={underline} alt='' style={{width:"25px", height:"25px"}}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"? <img src={underline} alt='' style={{width:"25px", height:"25px"}}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"? <img src={underline} alt='' style={{width:"25px", height:"25px"}}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"? <img src={underline} alt='' style={{width:"25px", height:"25px"}}/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
      </div>
  )
}

export default Navbar