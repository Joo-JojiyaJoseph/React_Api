import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ closeMobileMenu }) => {
  return (
    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
    <ul className="navigation clearfix">
        <li><Link to="/home" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
        <li><Link to="/project" onClick={closeMobileMenu}>Project</Link></li>
        <li><Link to="/services" onClick={closeMobileMenu}>Services</Link></li>
        <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
        <li><Link to="/career" onClick={closeMobileMenu}>Career</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li> 
    </ul>
</div>
  )
}

export default Navigation