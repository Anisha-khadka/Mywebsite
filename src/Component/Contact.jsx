import React , { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'





const Contact = () => {
 


  return (
    
    <div className="contact">
      <main>
        <div className='text-danger'>
   
        </div>
        <h1>Contact Us</h1>
        <form >
          <div>
            <label>Email</label>
            <input type="email" required placeholder='Abc@xyz.com'/>
          </div>
          <div>
            <label>Password </label>
            <input type="password" required placeholder='Password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </main>
      
    </div>
  )
}


export default Contact
