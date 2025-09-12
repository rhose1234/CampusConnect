import React from 'react'
import "./About.css";


import image1 from "../../assets/images/image1.png"
import image2 from "../../assets/images/image2.png"
import image3 from "../../assets/images/image3.png"

import image4 from  "../../assets/images/jacob2.png"
import jacob from "../../assets/images/JACOB.png"
import satigo from "../../assets/images/jacob3.png"
import mission from "../../assets/images/mission.png"



export default function About() {
  return (
    <>
        <div className="about">
      
          <h1 className="text-white fw-bold fs-1">Get To Know Us</h1>
          <p className="text-white text-sm hero-subtitle">
            Learn more about how we operate, our events, organizers and the board generally
          </p>
      </div>

      
       <div className='aboutUs container py-3 my-2'>
  <div className='row mx-auto align-items-center'>
    <div className='col-12 col-md-6'>
      <p className='fw-semibold subheading'>About Campus Connect</p>
      <h1 className='fw-bold text-black'>Why Us?</h1>
      <p>
        Campus Connect is the ultimate hub for students. Whether you're looking
        for a study group, a ride home for the holidays, or the best place to
        grab a late-night snack, we've got you covered.
      </p>
    </div>

    <div className='col-12 col-md-6'>
      <div className='row g-2'>
        <div className='col-12 col-md-6'>
          <img src={image1} className='img-fluid h-50' alt='image1' />
          <img src={image2} className='img-fluid h-50 mt-2' alt='image2' />
        </div>

     
        <div className='col-6 d-none d-md-block'>
          <img src={image3} className='img-fluid' alt='image3' />
        </div>
      </div>
    </div>
  </div>
      </div>

      <div className='speakers container py-3  my-2'>
         <p className='fw-semibold text-center subheading'>Meet Our Speakers</p>
      <h1 className='fw-bold text-center text-black'>Talented Speakers</h1>
        <div className='row mx-auto mt-5 gap-3 gap-md-0'>

        

           <div className='col-12 col-md-4'>
          <img className='card-img ' src={satigo} alt='speaker1'/>
           <div className='details p-3 rounded-bottom' >
            <h5 className='fw-bold text-white text-center'>Jacob Samson</h5>
            <p className='text-center text-white fw-semibold'>Active Mentor</p>
          </div>
        </div>

    <div className='col-12 col-md-4'>
          <img className='card-img ' src={image4} alt='speaker1'/>
          <div className='details  p-3 rounded-bottom' >
            <h5 className='fw-bold text-white text-center'>Jacob Samson</h5>
            <p className='text-center text-white fw-semibold'>Active Mentor</p>
          </div>
        </div>
          <div className='col-12 col-md-4'>
          <img className='card-img ' src={jacob} alt='speaker1'/>
          <div className='details p-3 rounded-bottom' >
            <h5 className='fw-bold text-white text-center'>Jacob Samson</h5>
            <p className='text-center text-white fw-semibold'>Active Mentor</p>
          </div>
        </div>

        </div>
      </div>

      <div className='mission container py-3 my-2 '>
  <div className='row mx-auto align-items-center'>
    <div className='col-12 col-md-6'>
      <img src={mission} className='mission w-100'/>
    </div>

     <div className='col-12 col-md-6'>
      <p className='fw-semibold subheading'>  What We do</p>
      <h1 className='fw-bold text-black'>Our Mission and Values</h1>
      <p>
       We are on a mission to ensuring that students do not just read books or just learn, they get to mingle, connect and network with individuals and 
       like minds, we host and give information about different categories of event ranging from.

       <ul className='px-3 mt-3'>
        <li>Cultural Events</li>
        <li>Sport Events</li>
        <li>Technical Events</li>
        <li>Academic Events</li>
       </ul>
      </p>
    </div>
    
  </div>
      </div>

       
      
    </>
  )
}
