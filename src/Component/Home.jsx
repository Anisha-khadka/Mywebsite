import React from 'react'
import vg from "../assests/2.webp";


import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {

  return (
    <>
    <div className="home" id='home'>
        <main>
          <h1>Shashav</h1>
          <p>Best choice for your fashion</p>
        </main>
    </div>
    <div className='home2'>
        <img src={vg} alt='graphics'/>
        <div>
            <p> We are the best solution for your clothing choice
                We are leading a clothing brand whose aim is to make your 
                shopping reasonable and fashionable.
           </p>
       </div>
    </div>
    <div className="home3" >
      <div>
        <h1>What can you find?</h1>
        <p>You can find great collection of trendy clothes which seems
            to fulfil all your fashionable needs in reasonable price. We believe everyone deserves to have a taste of what they feel comfortable to wear and what type of
             fashion trends they follow.Shashav is very grateful to help people to never miss the trendy platform
              and we will be there 24/7 to be a part of your fashion.We are budget and customer friendly and is ready to help people with quality of product.
              We are the future of trendy platform in Nepal.</p>
              
              
   
   
      </div>
    
       

    </div>
    <div className="home4" id="brands">
      <div>
        <h1>Find us</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
          <a href='https://www.google.com/'><AiFillGoogleCircle/></a>
              <p>Goggle </p>
              </div>
              <div style={{animationDelay:"0.5s"}}>
               <a href='https://www.amazon.com/'> <AiFillAmazonCircle/></a>
                 <p>Amazon</p>
              </div>
              <div style={{animationDelay:"0.7s"}}>
               <a href='https://www.youtube.com/'>  <AiFillYoutube/></a>
                 <p>Youtube</p>
              </div>
              <div style={{animationDelay:"0.9s"}}>
                 <a href='https://www.instagram.com/'><AiFillInstagram/></a>
                 <p>Instagram</p>
              </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
