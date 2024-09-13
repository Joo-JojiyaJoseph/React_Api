import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
    <ul className="navigation clearfix">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/project">Project</a></li>
        <li><a href="/services">services</a></li>
        <li><Link to="/contact">Contact</Link></li> 
    </ul>
</div>
  )
}

export default Navigation