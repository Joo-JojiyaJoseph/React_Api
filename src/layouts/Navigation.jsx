import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Navigation = ({ closeMobileMenu }) => {

  const [services, setservices] = useState([]);
  const [error, setError] = useState(null);

  async function getservice() {
    try {
      const res = await fetch("https://capricornuae.com/AdminApi/api/service");
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setservices(data.services);
    } 
    catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    getservice();
  }, []);

  return (
    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
    <ul className="navigation clearfix">
        <li><Link to="/home" onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
        <li><Link to="/project" onClick={closeMobileMenu}>Project</Link></li>
        {/* <li><Link to="/services" onClick={closeMobileMenu}>Services</Link></li> */}
        <li class="dropdown"><Link to="/services" onClick={closeMobileMenu}>Services</Link>
                                        <ul>
                                          
          {services.length > 0 ? (
          services.map((service, index) => (
                                            <li key={index} ><Link to={`/service/${service.id}`}>{service.title}</Link></li>
                                            // <li><a href="service-2.html">Services 2</a></li>
                                            // <li><a href="service-3.html">Services 3</a></li>
                                          ))
                                        ) : (
                                          <p></p>
                                        )
                                        }
                                        </ul>
                                    </li>
        <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
        <li><Link to="/career" onClick={closeMobileMenu}>Career</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li> 
    </ul>
</div>
  )
}

export default Navigation