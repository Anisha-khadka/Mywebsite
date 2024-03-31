import React from 'react'

import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
  <footer>
    <div className='row'>
      <div className='col'>
        <h1>Shashav</h1>
        <p>@Subscribe youtube channel for most exclusive discounts and 
          offer that will be presented to the subscribers only.
        </p>
    </div>
     
    <div className='col'>
    <h3>Links</h3>
    <ul>
      <li> <HashLink to={'/#home'}>Home</HashLink></li> 
      <li>  <HashLink to={'/contact'}>Contact</HashLink></li>
       <li> <HashLink to={'/#about'}>About</HashLink></li>
       <li> <HashLink to={'/#brands'}>SocialMedia</HashLink></li>
       <li> <HashLink to={'/services'}>Services</HashLink></li>
       
      
    </ul>
    </div>
    <div className='col'>
         <h3>Location</h3>
         <p>Thulobharang,Nagarjun-02</p>
         <p>Kathmandu,Nepal</p>
         <p className='email'>anishakhadka434@gmail.com</p>
         <p>+977-9827937428</p>
    </div>
    <div className='col'>
        <h3>Follow us</h3>
        <div className='col1'>
           <a href='https://youtube.com/@anishakhadka2655' target='blank'>Youtube</a> 
           <a href='https://www.tiktok.com/@anishakhadka39' target='blank'>Tiktok</a> 
           <a href='https://github.com/Anisha-khadka' target='blank'>Github</a> 
        </div>
    </div>
    </div>

  </footer>
  )
}

export default Footer
