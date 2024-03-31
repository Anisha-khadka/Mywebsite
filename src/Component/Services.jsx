import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import c1 from "../assests/dress.avif";
import c2 from "../assests/7.webp";


const Services = () => {
  return (
    <div className='services'>
<Carousel 

infiniteLoop
 autoPlay 
 showStatus={false} 
 showArrows={false}
 interval={1000}
 showThumbs={false}
 >
  <div>
    <img src={c1} alt="item1"/>
    <p className='legend'>Quality product</p>
    </div>
    <div >
    <img src={c2} alt="item1"/>
    <p className='legend'>Wardrobe Styling</p>
    </div>
   
</Carousel>
      
    </div>
  )
}

export default Services
