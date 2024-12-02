import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { baseUrlImage } = useContext(AppContext);
  const { logo, brochure } = useContext(AppContext);
  // Show button when page is scrolled down

  const [footer_certifications, setfooter_certifications] = useState([]);
  const [error, setError] = useState(null);
  async function getfooter_certification() {
    try {
      const res = await fetch("https://capricornuae.com/AdminApi/api/footer_certification");
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setfooter_certifications(data.footer_certification);
      console.log(data.footer_certifications);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    getfooter_certification();
  }, []);
console.log(footer_certifications);
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
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
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
        <div className="icon-layer">
          <img src="assets/images/icons/icon-5.png" alt="" />
        </div>
        <div className="footer-top p_relative d_block">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-6 col-sm-12 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link to="/home">
                      <img
                        src={`${baseUrlImage}/uploads/logo/${logo}`}
                        alt=""
                      />
                    </Link>
                  </figure>
                  <div className="text">
                    <p>
                      Capricorn brings your designs to life. A great concept can
                      make your space truly unique.{" "}
                    </p>
                  </div>
                  <div>
                    <ul className="row">
                      {footer_certifications.length > 0 ? (
                        footer_certifications.map(
                          (footer_certification, index) => (
                            <li key={index} className="p-2">
                              <img
                                src={`${baseUrlImage}/uploads/footer_certification/${footer_certification.image}`}
                                style={{ width: "70px", height: "70px" }}
                                alt="demo"
                              />
                            </li>
                          )
                        )
                      ) : (
                        <p></p>
                      )}
                    </ul>
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
                      <li>
                        <Link to="/home">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/footer_certifications">
                          footer_certifications
                        </Link>
                      </li>
                      <li>
                        <Link to="/career">Career</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>footer_certifications</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><a href="index.html">About</a></li>
                                        <li><a href="index.html">footer_certifications</a></li>
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
                      <li>
                        <i class="icon-2"></i> Capricorn electromechanical,
                        <br /> Mazyed mall business tower-1 <br />
                        Abudhabi, uae
                      </li>
                      <li>
                        <i class="icon-4"></i> +971505071276
                      </li>
                      <li>
                        <i class="icon-4"></i> 026453583
                      </li>
                      <li>
                        <i class="icon-3"></i>
                        <a href="mailto: lnfo@capricornuae.com">
                          {" "}
                          lnfo@capricornuae.com
                        </a>
                      </li>
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
              <div className="copyright">
                <p>
                  <a href=""></a> &copy; 2024 All Right Reserved
                </p>
              </div>
              <ul className="footer-nav">
                <li>
                  <a href="">Terms of footer_certification</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- main-footer end --> */}

      {/* <!--Scroll to top--> */}
      {isVisible && (
        <div
          className="scroll-to-top"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
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
  );
};

export default Footer;
