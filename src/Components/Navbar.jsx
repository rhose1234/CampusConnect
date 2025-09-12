import React from 'react'
import logo from "../assets/images/logo.svg"
import { Link, NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react'
import bookmark from "../assets/images/bookmark.svg"
import { motion } from "framer-motion";




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
    <Link className="navbar-brand" to="/">
        <img src={logo} alt='logo' className='logo' />
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
        <li className='nav-item'>
          <NavLink className="nav-link" to = "/feedback" href="#">Feedback</NavLink>
        </li>
      </ul>

      <div className='d-flex gap-4 mt-2'>
       <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} >
              <Link to="/register">
      <button className='registerBtn rounded-5' >Register</button>
       </Link>
       </motion.div>

       <motion.div
            whileHover={{ scale: 1.2 }} >
      <NavLink className="nav-link" to="/bookmarks" href="#"><img src={bookmark} alt=''  /></NavLink>
        </motion.div>
        
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
