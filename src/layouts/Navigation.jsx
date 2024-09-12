import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
    <ul className="navigation clearfix">
        <li><a href="about.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="about.html">Gallery</a></li>
        <li><a href="about.html">Project</a></li>
        <li><Link to="/contact">Contact</Link></li> 
    </ul>
</div>
  )
}

export default Navigation