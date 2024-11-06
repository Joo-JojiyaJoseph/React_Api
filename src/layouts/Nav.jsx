import React, { useContext, useState, useEffect } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import './Navig.js';
import './Navig.css';

const Nav = () => {
  
  const { baseUrlImage } = useContext(AppContext);
  const { logo, brochure } = useContext(AppContext);
  const [search, setSearch] = useState({});
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with search term: ${search}`);
  };

  const closeMobileMenu = () => {
    setMobileMenuVisible(false);
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuVisible(prevState => !prevState);
  };

  useEffect(() => {
    if (isMobileMenuVisible) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  }, [isMobileMenuVisible]);

  return (
    <>
      <div className="loader-wrap">
        <div className="preloader">
          <div className="preloader-close">x</div>
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <span data-text-preloader="we" className="letters-loading">we</span>
                <span data-text-preloader="l" className="letters-loading">l</span>
                <span data-text-preloader="c" className="letters-loading">c</span>
                <span data-text-preloader="o" className="letters-loading">o</span>
                <span data-text-preloader="m" className="letters-loading">m</span>
                <span data-text-preloader="e" className="letters-loading">e</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      <div id="search-popup" className="search-popup">
        <div className="popup-inner">
          <div className="upper-box clearfix">
            <figure className="logo-box pull-left">
              <Link to="home">
                <img src={`${baseUrlImage}/uploads/logo/${logo}`} alt="" />
              </Link>
            </figure>
            <div className="close-search pull-right">
              <span className="far fa-times"></span>
            </div>
          </div>
          <div className="overlay-layer"></div>
          <div className="auto-container">
            <div className="search-form">
              <form onSubmit={handleSearchSubmit}>
                <div className="form-group">
                  <fieldset>
                    <input
                      type="search"
                      className="form-control"
                      name="search-input"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Type your keyword and hit"
                      required
                    />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        {/* Header Top */}
        <div className="header-top">
          <div className="top-inner">
            <div className="left-column">
              <ul className="info clearfix">
                <li>
                  <i className="icon-1"></i>Sun-Thu 08:00AM-05:00PM
                </li>
                <li>
                  +971505071276
                </li>
                <li>
                  <i className="icon-3"></i>
                  <a href="mailto: lnfo@capricornuae.com"> lnfo@capricornuae.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="right-column">
              <ul className="social-links clearfix">
                <li>
                  <p>Follow Us:</p>
                </li>
                <li>
                  <Link to="https://www.facebook.com/capricornuae/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/capricornuae/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://ae.linkedin.com/company/capricorn-general-maintenance">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                {/* <li>
                  <Link to="home">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* Header Lower */}
        <div className="header-lower">
          <div className="outer-box">
            <div className="menu-area clearfix">
              <div className="logo-box">
                <figure className="logo">
                  <Link to="home">
                    <img src={`${baseUrlImage}/uploads/logo/${logo}`} alt="" />
                  </Link>
                </figure>
              </div>
              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <Navigation />
              </nav>
            </div>
            <div className="nav-right">
              <div className="support-box">
                <h6>
                  <i className="icon-4"></i>Call:{" "}
                  <a href="tel:123045615523">+1 (230)-456-155-23</a>
                </h6>
              </div>
              <div className="btn-box">
                {brochure ? (
                  <Link
                    to={`${baseUrlImage}/uploads/brochure/${brochure.image}`}
                    className="theme-btn btn-one"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brochure
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className="sticky-header">
          <div className="outer-box">
            <div className="menu-area clearfix">
              <div className="logo-box">
                <figure className="logo">
                  <Link to="home">
                    <img src={`${baseUrlImage}/uploads/logo/${logo}`} alt="" />
                  </Link>
                </figure>
              </div>
              <nav className="main-menu clearfix">
                <Navigation />
              </nav>
            </div>
            <div className="nav-right">
              <div className="support-box">
                <h6>
                  <i className="icon-4"></i>Call:{" "}
                  <a href="tel:123045615523">+1 (230)-456-155-23</a>
                </h6>
              </div>
              <div className="btn-box">
                {brochure ? (
                  <Link
                    to={`${baseUrlImage}/uploads/brochure/${brochure.image}`}
                    className="theme-btn btn-one"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brochure
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
<nav className={`mobile-menu ${isMobileMenuVisible ? 'visible' : ''}`}>
  <div className="menu-backdrop" onClick={closeMobileMenu}></div>
  <div className="close-btn" onClick={closeMobileMenu}>
    <i className="fas fa-times"></i>
  </div>
  <nav className="menu-box">
    <div className="nav-logo">
      <Link to="home">
        <img src={`${baseUrlImage}/uploads/logo/${logo}`} alt="" title="" />
      </Link>
    </div>
    <div className="menu-outer">
      {/* Update the Navigation component or its links here */}
      <Navigation closeMobileMenu={closeMobileMenu} />
    </div>
  </nav>
</nav>


    </>
  );
};

export default Nav;
