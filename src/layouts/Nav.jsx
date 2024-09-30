import React, { useContext, useState } from "react";
import Navigation from "./Navigation";
// import logo from "/header/logo1.png";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Nav = () => {
  
const { logo,brochure } = useContext(AppContext);
  const [search, setSearch] = useState({});

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert(`form submited`);
  };

  return (
    <>
      {/* <div className="loader-wrap">
        <div className="preloader">
          <div className="preloader-close">x</div>
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <span data-text-preloader="e" className="letters-loading">e</span>
                <span data-text-preloader="a" className="letters-loading">a</span>
                <span data-text-preloader="s" className="letters-loading">s</span>
                <span data-text-preloader="t" className="letters-loading">t</span>
                <span data-text-preloader="o" className="letters-loading">o</span>
                <span data-text-preloader="n" className="letters-loading">n</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!--Search Popup--> */}
      <div id="search-popup" className="search-popup">
        <div className="popup-inner">
          <div className="upper-box clearfix">
            <figure className="logo-box pull-left">
              <Link to="home">
                <img src={logo} alt="" />
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
                    <input type="search" className="form-control" name="search-input" value={search} onChange={(e) => setSearch(e.target.value)}
                      placeholder="Type your keyword and hit" required />
                    <button type="submit"><i className="far fa-search"></i>
                    </button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- main header --> */}
      <header className="main-header">
        {/* <!-- header-top --> */}
        <div className="header-top">
          <div className="top-inner">
            <div className="left-column">
              <ul className="info clearfix">
                <li> <i className="icon-1"></i>Sun-Thu 08:00AM-05:00PM</li>
                <li> <i className="icon-2"></i>380 Albert St, Melborne</li>
                <li> <i className="icon-3"></i> <a href="mailto:needhelp@info.com">needhelp@info.com</a></li>
              </ul>
            </div>
            <div className="right-column">
              <ul className="social-links clearfix">
                <li> <p>Follow Us:</p></li>
                <li> <Link to="home"> <i className="fab fa-facebook-f"></i> </Link> </li>
                <li> <Link to="home"> <i className="fab fa-twitter"></i></Link></li>
                <li>  <Link to="home"><i className="fab fa-linkedin-in"></i></Link> </li>
                <li>  <Link to="home"><i className="fab fa-pinterest-p"></i> </Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- header-lower --> */}
        <div className="header-lower">
          <div className="outer-box">
            <div className="menu-area clearfix">
              <div className="logo-box">
                <figure className="logo">
                   <Link to="home">
                    <img src="" alt="" />
                  </Link>
                </figure>
              </div>
              {/* <!--Mobile Navigation Toggler--> */}
              <div className="mobile-nav-toggler">
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
              <div className="search-box-outer search-toggler">
                <i className="icon-5"></i>
              </div>
              <div className="btn-box">
              <Link to={brochure.image} className="theme-btn btn-one">
                  Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <!--sticky Header--> */}
        <div className="sticky-header">
          <div className="outer-box">
            <div className="menu-area clearfix">
              <div className="logo-box">
                <figure className="logo">  <Link to="home"> <img src={logo} alt="" /> </Link> </figure>
              </div>
              <nav className="main-menu clearfix">
                {/* <!--Keep This Empty / Menu will come through Javascript--> */}
              </nav>
            </div>
            <div className="nav-right">
              <div className="support-box">
                <h6>
                  <i className="icon-4"></i>Call:{" "}
                  <a href="tel:123045615523">+1 (230)-456-155-23</a>
                </h6>
              </div>
              <div className="search-box-outer search-toggler"><i className="icon-5"></i> </div>
              <div className="btn-box">
              <Link to={brochure.image} className="theme-btn btn-one"> Brochure</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- main-header end --> */}

      {/* <!-- Mobile Menu  --> */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"> <i className="fas fa-times"></i></div>
        <nav className="menu-box">
          <div className="nav-logo">
             <Link to="home"><img src={logo} alt="" title=""/> </Link>
          </div>
          <div className="menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li><a href="tel:+8801682648101">+88 01682648101</a></li>
              <li><a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li> <Link to="home"><span className="fab fa-twitter"></span></Link> </li>
              <li> <Link to="home"><span className="fab fa-facebook-square"></span> </Link></li>
              <li> <Link to="home"><span className="fab fa-pinterest-p"></span></Link> </li>
              <li> <Link to="home"><span className="fab fa-instagram"></span> </Link> </li>
              <li> <Link to="home"><span className="fab fa-youtube"></span></Link> </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* <!-- End Mobile Menu --> */}

    </>
  );
};

export default Nav;
