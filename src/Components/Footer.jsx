import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../assets/images/logo.svg"
import linkedin from "../assets/images/linkedin.svg"
import twitter from "../assets/images/twitter.svg"
import instagram from "../assets/images/instagram.svg"
import facebook from "../assets/images/facebook.svg"

export default function Footer() {
  return (
    <>
    <div className="footer bg-black py-5 ">
  <div className="container pt-5 ">
    <div className="row  mx-auto d-flex justify-content-between">
      
      {/* first column */}
      <div className="col-12 col-md-4 d-flex flex-column mt-4  ">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <p className="text-white mb-3 mt-3">Stay updated, Stay involved</p>
        <form className="position-relative w-100">
          <input
            type="email"
            className="form-control rounded-1 px-4 py-2 pe-1"
            placeholder="Enter your email"
            required />
          <button
            type="submit"
            className="fw-semibold position-absolute top-50 end-0 translate-middle-y px-3 py-2 rounded-1 border-0 text-white"
            style={{ background: "#F05537" }}>
            Subscribe
          </button>
        </form>
      </div>

      {/* second column*/}
      <div className="col-12 col-md-auto d-flex flex-column gap-2 mt-4 w-md-auto ">
        <h5 className="text-secondary fw-semibold">Company</h5>

        <Link className="text-white" to="/">About</Link>
        <Link className="text-white" to="/">Contact</Link>
        <Link className="text-white" to="/">Gallery</Link>
        <Link className="text-white" to="/">Register</Link>
      </div>

      {/* third column */}
      <div className="col-12 col-md-auto d-flex flex-column gap-2 mt-4 ">
        <h5 className="text-secondary fw-semibold">Follow Us</h5>
          <Link className="text-white" to="/">Twitter</Link>
            <Link className="text-white" to="/">Instagram</Link>
        <div className="d-flex flex-row gap-3">
          <Link to="/"><img src={linkedin} alt="linkedin" /></Link>
          <Link to="/"><img src={facebook} alt="facebook" /></Link>
          <Link to="/"><img src={twitter} alt="twitter" /></Link>
          <Link to="/"><img src={instagram} alt="instagram" /></Link>
        </div>
      </div>

    </div>

    {/* Copyright text */}
    <p className="fs-6 text-xs fw-normal text-center text-secondary mt-5 pt-4">
      &copy; 2025 Campus Connect. All Rights Reserved
    </p>
  </div>
</div>

    </>
  )
}
