import React from 'react'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import talented from '../../assets/images/talented-speaker.png'
import jacob from '../../assets/images/JACOB.png'
import santigo from '../../assets/images/SATIGO.png'
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'

function About() {
  const handleClick = () =>{
    
  }
  return (
    <div className="body">
      <section className="section-1" >
        <h1 className="about-us">About Us</h1>
      <h1 className="about-us-heading">About Us</h1>
      <p className="second-heading"><p>Home</p><p className="About-Us">About us</p></p>
      </section>
      <section className="section-2">
        <p>
        <p className="about-campus-connect">About Campus Connect</p>
        <h3 className="mini-head">Sed malesuada massa lacinia, dictum dui a, dignissim sem.</h3>
        <p className="mini-head-2">Campus Connect is the ultimate hub for students. Whether you're looking for a study group, a ride home for the holidays, or the best place to grab a late-night snack, we've got you covered</p>
        <div className="icons">
          <img src={icon1} />
          <span> 100+ Speakers </span>
          <img src={icon2} />
           <span> 400+ Events </span>
          <img src={icon3} />
           <span> 100+ Schedule </span>
        </div>
          <button className='button'onclick>Learn more</button>
        </p>
        <p className="second">
          <div>
        <img src={image1} alt="text" />
        <img src={image2} alt="text" />
        </div>
        <img src={image3} alt="text" />
        </p>
      </section>
    <section className="section-3">
      <p className="Speaker">SPEAKER</p>
      <h6 className="h6">Speaker</h6>
      <h2 className="h2">TALENTED SPEAKER</h2>
      <div className="talented-group">
      <p className='talented'>
        <img src={talented}  />
         <h4>TINA COKER</h4>
        <span>Marketing</span>
      </p>
       <p className='talented'>
        <img src={jacob}  />
         <h4>JACOB LOGAN</h4>
        <span>Business manager</span>
      </p>
       <p className='talented'>
        <img src={santigo}  />
         <h4>SANTIGO ABENA</h4>
        <span>Senior Visual Designer</span>
      </p>
      </div>
     </section>
     <section className="section-4">
      <div className="left-side">
        <h2 className="testimonial">TESTIMONIAL</h2>
      <h3>Testimonial</h3>
      <h1>What People Say About Campus Connect.</h1>
      </div>
      <div className='right-side'>
        <img src={talented}/>
        <div>
        <p className="asterik">''</p>
        <p className='head'>TINA COKER</p>
         <p className='neck'>Marketing</p>
         <p className='chest'>Campus Connect is the ultimate hub for students. Whether you're looking for a study group, a ride home for the holidays.</p>
        </div>

      </div>
     </section>
    </div>
  )
}

export default About