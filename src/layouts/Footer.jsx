import React, { useEffect, useState } from 'react'
import logo from "/header/logo1.png";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
  return (
    <>
    
    {/* <!-- subscribe-section --> */}
        <section className="subscribe-section p_relative">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row align-items-center clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-column">
                            <div className="d_block p_relative text text-center">
                                <h2>Powering Innovation with Precision Engineering</h2>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- subscribe-section end --> */}


        {/* <!-- main-footer --> */}
        <footer className="main-footer p_relative bg-color-2">
            <div className="icon-layer"><img src="assets/images/icons/icon-5.png" alt=""/></div>
            <div className="footer-top p_relative d_block">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-5 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget logo-widget">
                                <figure className="footer-logo"><a href="index.html"><img src={logo} alt=""/></a></figure>
                                <div className="text">
                                    <p>Capricorn brings your designs to life. A great concept can make your space truly unique. We offer unlimited design options tailored to any space, creating environments you'll love to show off. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget ml_100">
                                <div className="widget-title">
                                    <h3>Links</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><a href="">Home</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">Service</a></li>
                                        <li><a href="">Project</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><a href="index.html">About</a></li>
                                        <li><a href="index.html">Services</a></li>
                                        <li><a href="index.html">Job</a></li>
                                        <li><a href="index.html">opportunities</a></li>
                                        <li><a href="index.html">Location</a></li>
                                        <li><a href="index.html">Article</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Contacts</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="info-list clearfix">
                                        <li> Office No-7,M39 ,Mussafah,Abudhabi-UAE</li>
                                        <li> 971(4)2283240</li>
                                        <li><a href="mailto: info@capriconuae.com"> info@capriconuae.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom p_relative">
                <div className="auto-container">
                    <div className="bottom-inner p_relative">
                        <div className="copyright"><p><a href=""></a> &copy; 2024 All Right Reserved</p></div>
                        <ul className="footer-nav">
                            <li><a href="">Terms of Service</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- main-footer end --> */}



        {/* <!--Scroll to top--> */}
        {isVisible && (
                <div className="scroll-to-top" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
                    <div className="scroll-top-inner">
                        <div className="scroll-bar">
                            <div className="bar-inner"></div>
                        </div>
                        <div className="scroll-bar-text">Go To Top</div>
                    </div>
                </div>
            )}
        {/* <!-- Scroll to top end --> */}
    </>
  )
}

export default Footer