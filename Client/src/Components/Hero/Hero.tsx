import React from 'react'
import logo from "./Logo.webp"
import { FaGoogle } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>BUILD LEARN AND GROW WITH DEvVERSE</h1>
        <p>
        DEVVERSE OFFERS A COMPLETELY FREE LIBRARY OF PDFS, LINKS, AND TOOLS LIKE DOC-TO-PDF CONVERTERS, PROVIDING TOP RESOURCES FOR WEB DEVELOPMENT AND COMPUTER APPLICATIONS
        </p>

        <div className="hero-btn">
          <button className='flex items-center gap-2'>Login with <FaGoogle style={{
            color: "white",
            fontSize: "18px",
          }} /></button>
          <button className="secondary-btn">SignUp
          </button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={logo}  alt="hero-image" />
      </div>
    </main>
  )
}

export default Hero