import React from 'react'

import shape_3 from '/home/shape-3.png'
import shape_4 from '/home/shape-4.png'

const Services = () => {
  return (
    <>
    {/* <!-- service-section --> */}
        <section className="service-section">
            <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage:`url(${shape_3})`}}></div>
                <div className="pattern-2"  style={{backgroundImage:`url(${shape_4})`}}></div>
            </div>
            <div className="auto-container">
                <div className="sec-title p_relative mb_50 centred">
                    <h5 className="d_block fs_17 lh_25 fw_medium mb_9">Our Services</h5>
                    <h2 className="d_block fs_40 lh_50 fw_bold">We are a Full Service Electrical <br />Contractor</h2>
                </div>
                <div className="tabs-box">
                    {/* <div className="tab-btn-box p_relative d_block mb_60 centred">
                        <ul className="tab-btns tab-buttons clearfix">
                            <li className="tab-btn" data-tab="#tab-1">Domestic Services</li>
                            <li className="tab-btn active-btn" data-tab="#tab-2">Industrial Services</li>
                            <li className="tab-btn" data-tab="#tab-3">Commercial Services</li>
                        </ul>
                    </div> */}
                    <div className="tabs-content">
                        {/* <div className="tab" id="tab-1">
                            <div className="inner-box">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content_block_two">
                                            <div className="content-box p_relative d_block mr_70">
                                                <div className="text p_relative d_block">
                                                    <h3>MEP</h3>
                                                    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam quis nostrud exercitation ullamco laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item p_relative d_block">
                                                            <div className="icon-box"><i className="icon-15"></i></div>
                                                            <h4><a >Air Conditioning</a></h4>
                                                            <p>Lorem ipsum dolor amet con adicing elit sed.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item p_relative d_block">
                                                            <div className="icon-box"><i className="icon-16"></i></div>
                                                            <h4><a href="heating-service.html">Heating Service</a></h4>
                                                            <p>Lorem ipsum dolor amet con adicing elit sed.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item p_relative d_block">
                                                            <div className="icon-box"><i className="icon-17"></i></div>
                                                            <h4><a href="indoor-lighting.html">Indoor Lighting</a></h4>
                                                            <p>Lorem ipsum dolor amet con adicing elit sed.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item p_relative d_block">
                                                            <div className="icon-box"><i className="icon-18"></i></div>
                                                            <h4><a href="security-system.html">Security System</a></h4>
                                                            <p>Lorem ipsum dolor amet con adicing elit sed.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                        <div className="image_block_two">
                                            <div className="image-box p_relative d_block mt_8">
                                                <figure className="image p_relative d_block">
                                                    <img src="assets/images/service/service-1.jpg" alt=""/></figure>
                                                <div className="icon-box"><i className="icon-45"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="tab active-tab" id="tab-2">
                            <div className="inner-box">
                                <div className="content_block_two">
                                    <div className="content-box p_relative d_block">
                                        <div className="row clearfix">
                                            <div className="col-lg-4 col-md-12 col-sm-12 text-column">
                                                <div className="text p_relative d_block">
                                                    <h3>Our Service</h3>
                                                    <p>Capricorn MEP capabilities in Mechanical, Electrical & Plumbing (MEP) are built around providing feasible and economically viable designs. The company is devoted to develop and discover solutions that are a perfect fit for the Client’s objective as well as budgets. The gamut of services offered by Capricorn MEP encompasses heating, ventilation, air conditioning, refrigeration, plumbing and utility distribution systems.</p>
                                                       </div>
                                            </div>
                                            <div className="col-lg-8 col-md-12 col-sm-12 inner-column">
                                                <div className="inner-content">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div className="single-item p_relative d_block">
                                                                <div className="icon-box"><i className="icon-15"></i></div>
                                                                <h4><a >MEP Design</a></h4>
                                                                <p> We are able to undertake complex MEP design and build projects at any level, up to major residential, commercial and industrial service for our clients using the most innovative and energy sector projects with high. </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div className="single-item p_relative d_block">
                                                                <div className="icon-box"><i className="icon-16"></i></div>
                                                                <h4><a >HVAC ENGINEERING SERVICES</a></h4>
                                                                <p>HVAC - a specialist Company in the UAE We provide HVAC (Heating, ventilation & Air Conditioning) systems including automated control systems to expertly manage the climatic working environment of your business. </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div className="single-item p_relative d_block">
                                                                <div className="icon-box"><i className="icon-17"></i></div>
                                                                <h4><a>ELECTRICAL ENGINEERING</a></h4>
                                                                <p>We offer a complete service from feasibility study to conceptual design and installation. </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div className="single-item p_relative d_block">
                                                                <div className="icon-box"><i className="icon-18"></i></div>
                                                                <h4><a > PLUMBING ENGINEERING SERVICES</a></h4>
                                                                <p>Our plumbing services team handles all aspects of plumbing, water supply, drainage, swimming pool filtration systems.</p>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div className="single-item p_relative d_block">
                                                                <div className="icon-box"><i className="icon-19"></i></div>
                                                                <h4><a >MAINTENANCE</a></h4>
                                                                <p>We are a highly successful maintenance services company and our offices will work with you to protect your investment. </p>
                                                            </div>
                                                        </div> */}
                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="tab" id="tab-3">
                            <div className="inner-box">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                                        <div className="image_block_three">
                                            <div className="image-box p_relative d_block">
                                                <figure className="image p_relative d_block"><img src="assets/images/service/service-2.jpg" alt=""/></figure>
                                                <div className="text">
                                                    <h5><i className="icon-45"></i>Best of Electrical Services</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content_block_three">
                                            <div className="content-box">
                                                <div className="text">
                                                    <h3>Commercial Service</h3>
                                                    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam quis nostrud exercitation ullamco laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                                </div>
                                                <div className="list-box clearfix">
                                                    <ul className="list-style-one clearfix">
                                                        <li>Air Conditioning</li>
                                                        <li>Electric Heating Systems</li>
                                                        <li>Telephone & Computer Wiring</li>
                                                        <li>Lighting</li>
                                                        <li>Power Outlets</li>
                                                        <li>Appliances Overheat</li>
                                                    </ul>
                                                    <ul className="list-style-one clearfix">
                                                        <li>Frequent Power Surges</li>
                                                        <li>Rising Power Bills</li>
                                                        <li>Flickering Lights</li>
                                                        <li>Pool & Hot Tub Wiring</li>
                                                        <li>Whole House Surge Protector</li>
                                                        <li>New Construction</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- service-section end --> */}

    </>
  )
}

export default Services