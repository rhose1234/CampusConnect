import React from 'react'
import logo from "../assets/images/logo.svg"
import { Link, NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react'
import bookmark from "../assets/images/bookmark.svg"

export default function Navbar() { 
  const [scroll, setScroll] = useState(false)

useEffect(() => {

  const handleScroll = () => {
  if(window.scrollY > 50){
    setScroll(true)
  }
  else{
    setScroll(false)
  }
   }
window.addEventListener("scroll", handleScroll)
}, [])

  return (
    <>
     <nav className={`navbar navbar-expand-lg  position-fixed py-3 w-100 z-3 ${ scroll ? "scroll" : "bg-transparent" } `}>
  <div className="container">
    <Link className="navbar-brand" href="#">
        <img src={logo} alt='logo' className='w-50' />
    </Link>

    <button 
  className="navbar-toggler" 
  type="button" 
  data-bs-toggle="collapse" 
  data-bs-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" 
  aria-expanded="false" 
  aria-label="Toggle navigation"
>
  <span className="toggler-line"></span>
  <span className="toggler-line"></span>
  <span className="toggler-line"></span>
</button>

    <div className="collapse navbar-collapse navbar-drop" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4  text-white fw-semibold">
        <li className="nav-item">
          <NavLink to="/" className="nav-link fw-bold " aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" href="#">About</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/events" href="#">Events</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/gallery" href="#">Gallery</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/contact" href="#">Contact</NavLink>
        </li>
      </ul>

      <div className='d-flex gap-4 mt-2'>
      <button className='registerBtn rounded-5'>Register</button>
      <NavLink className="nav-link" to="/bookmark" href="#"><img src={bookmark} alt='' className='w-75' /></NavLink>
        
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
