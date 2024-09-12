import React from 'react'

const Navigation = () => {
  return (
    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
    <ul className="navigation clearfix">
        <li className="current dropdown"><a href="index.html">Home</a>
            <ul>
                <li><a href="index.html">Home Page 01</a></li>
                <li><a href="index-2.html">Home Page 02</a></li>
                <li><a href="index-3.html">Home Page 03</a></li>
                <li><a href="index-4.html">Home Page 04</a></li>
                <li><a href="index-5.html">Home Page 05</a></li>
                <li><a href="index-6.html">Home Page 06</a></li>
                <li><a href="index-onepage.html">OnePage Home</a></li>
                <li><a href="index-rtl.html">RTL Home</a></li>
                <li className="dropdown"><a href="index.html">Header Style</a>
                    <ul>
                        <li><a href="index.html">Header Style 01</a></li>
                        <li><a href="index-2.html">Header Style 02</a></li>
                        <li><a href="index-3.html">Header Style 03</a></li>
                        <li><a href="index-4.html">Header Style 04</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="about.html">About</a></li>
        <li className="dropdown"><a href="index.html">Services</a>
            <ul>
                <li><a href="service.html">Services 1</a></li>
                <li><a href="service-2.html">Services 2</a></li>
                <li><a href="service-3.html">Services 3</a></li>
                <li><a href="air-conditioning.html">Air Conditioning</a></li>
                <li><a href="heating-service.html">Heating Service</a></li>
                <li><a href="power-outlets.html">Power Outlets</a></li>
                <li><a href="indoor-lighting.html">Indoor Lighting</a></li>
                <li><a href="security-system.html">Security System</a></li>
                <li><a href="electrical-panels.html">Electrical Panels</a></li>
            </ul>
        </li>
        <li className="dropdown"><a href="index.html">Pages</a>
            <ul>
                <li className="dropdown"><a href="index.html">Team</a>
                    <ul>
                        <li><a href="team.html">Our Team 1</a></li>
                        <li><a href="team-2.html">Our Team 2</a></li>
                        <li><a href="team-details.html">Team Details</a></li>
                    </ul>
                </li>
                <li className="dropdown"><a href="index.html">Project</a>
                    <ul>
                        <li><a href="project.html">Projects 1</a></li>
                        <li><a href="project-2.html">Projects 2</a></li>
                        <li><a href="project-details.html">Project Details 1</a></li>
                        <li><a href="project-details-2.html">Project Details 2</a></li>
                    </ul>
                </li>
                <li><a href="testimonial.html">Testimonial</a></li>
                <li><a href="pricing.html">Pricing Table</a></li>
                <li><a href="faq.html">Faq’s</a></li>
                <li><a href="appointment.html">Appointment</a></li>
                <li><a href="error.html">404</a></li>
            </ul>
        </li>  
        <li className="dropdown"><a href="index.html">Shop</a>
            <ul>
                <li><a href="shop.html">Our Shop</a></li>
                <li><a href="shop-details.html">Shop Details</a></li>
                <li><a href="cart.html">Cart Page</a></li>
                <li><a href="checkout.html">Checkout</a></li>
            </ul>
        </li> 
        <li className="dropdown"><a href="index.html">Blog</a>
            <ul>
                <li><a href="blog.html">Blog Grid</a></li>
                <li><a href="blog-2.html">Blog Standard</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
        </li>  
        <li><a href="contact.html">Contact</a></li> 
    </ul>
</div>
  )
}

export default Navigation