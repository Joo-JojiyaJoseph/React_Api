import React from 'react'
import { Link } from 'react-router-dom'
import page_title_image from '/contact/page-title.jpg'

const Hero = () => {
  return (
  
     <section className="page-title centred">
            <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage:`url(${page_title_image})`}}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h2>Contact Us</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link to="home">Home</Link></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </section>
      
  )
}

export default Hero