import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
    <ul className="navigation clearfix">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
    </ul>
</div>
  )
}

export default Navigation