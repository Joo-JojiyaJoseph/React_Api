import React from 'react'

import shape_3 from '/home/shape-3.png'
import shape_4 from '/home/shape-4.png'

const Services = () => {
  return (
    <>
    {/* <!-- service-section --> */}
        <section class="service-section">
            <div class="pattern-layer">
                <div class="pattern-1" style={{backgroundImage:`url(${shape_3})`}}></div>
                <div class="pattern-2"  style={{backgroundImage:`url(${shape_4})`}}></div>
            </div>
            <div class="auto-container">
                <div class="sec-title p_relative mb_50 centred">
                    <h5 class="d_block fs_17 lh_25 fw_medium mb_9">Our Services</h5>
                    <h2 class="d_block fs_40 lh_50 fw_bold">We are a Full Service Electrical <br />Contractor</h2>
                </div>
                <div class="tabs-box">
                    <div class="tab-btn-box p_relative d_block mb_60 centred">
                        <ul class="tab-btns tab-buttons clearfix">
                            <li class="tab-btn" data-tab="#tab-1">Domestic Services</li>
                            <li class="tab-btn active-btn" data-tab="#tab-2">Industrial Services</li>
                            <li class="tab-btn" data-tab="#tab-3">Commercial Services</li>
                        </ul>
                    </div>
                    <div class="tabs-content">
                        <div class="tab" id="tab-1">
                            <div class="inner-box">
                                <div class="row clearfix">
                                    <div class="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_two">
                                            <div class="content-box p_relative d_block mr_70">
                                                <div class="text p_relative d_block">
                                                    <h3>Domestic Service</h3>
                                                    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam quis nostrud exercitation ullamco laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                                <div class="row clearfix">
                                                    <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div class="single-item p_relative d_block">
                                                            <div class="icon-box"><i class="icon-15"></i></div>
                                                            <h4><a href="air-conditioning.html">Air Conditioning</a></h4>
                                                            <p>Lorem ipsum dolor amet con adicing elit sed.</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div class="single-item p_relative d_block">
                                                            <div class="icon-box"><i class="icon-16"></i></div>
                                                            <h4><a href="heating-service.html">Heating Service</a></h4>
                                                            <p>Lorem ipsum dolor amet con adicing elit sed.</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div class="single-item p_relative d_block">
                                                            <div class="icon-box"><i class="icon-17"></i></div>
                                                            <h4><a href="indoor-lighting.html">Indoor Lighting</a></h4>
                                                            <p>Lorem ipsum dolor amet con adicing elit sed.</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div class="single-item p_relative d_block">
                                                            <div class="icon-box"><i class="icon-18"></i></div>
                                                            <h4><a href="security-system.html">Security System</a></h4>
                                                            <p>Lorem ipsum dolor amet con adicing elit sed.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_two">
                                            <div class="image-box p_relative d_block mt_8">
                                                <figure class="image p_relative d_block">
                                                    <img src="assets/images/service/service-1.jpg" alt=""/></figure>
                                                <div class="icon-box"><i class="icon-45"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab active-tab" id="tab-2">
                            <div class="inner-box">
                                <div class="content_block_two">
                                    <div class="content-box p_relative d_block">
                                        <div class="row clearfix">
                                            <div class="col-lg-4 col-md-12 col-sm-12 text-column">
                                                <div class="text p_relative d_block">
                                                    <h3>Industrial Service</h3>
                                                    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam quis nostrud exercitation ullamco laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                    <p>Excepteur sint occaecat cupidatat non proid ent, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-8 col-md-12 col-sm-12 inner-column">
                                                <div class="inner-content">
                                                    <div class="row clearfix">
                                                        <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div class="single-item p_relative d_block">
                                                                <div class="icon-box"><i class="icon-15"></i></div>
                                                                <h4><a href="air-conditioning.html">Air Conditioning</a></h4>
                                                                <p>Lorem ipsum dolor amet con adicing elit sed.do usmod tempor ux ncididunt enim ad minim veniam.</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div class="single-item p_relative d_block">
                                                                <div class="icon-box"><i class="icon-16"></i></div>
                                                                <h4><a href="heating-service.html">Heating Service</a></h4>
                                                                <p>Lorem ipsum dolor amet con adicing elit sed.do usmod tempor ux ncididunt enim ad minim veniam.</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div class="single-item p_relative d_block">
                                                                <div class="icon-box"><i class="icon-17"></i></div>
                                                                <h4><a href="indoor-lighting.html">Indoor Lighting</a></h4>
                                                                <p>Lorem ipsum dolor amet con adicing elit sed.do usmod tempor ux ncididunt enim ad minim veniam.</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div class="single-item p_relative d_block">
                                                                <div class="icon-box"><i class="icon-18"></i></div>
                                                                <h4><a href="security-system.html">Security System</a></h4>
                                                                <p>Lorem ipsum dolor amet con adicing elit sed.do usmod tempor ux ncididunt enim ad minim veniam.</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div class="single-item p_relative d_block">
                                                                <div class="icon-box"><i class="icon-19"></i></div>
                                                                <h4><a href="power-outlets.html">Power Outlets</a></h4>
                                                                <p>Lorem ipsum dolor amet con adicing elit sed.do usmod tempor ux ncididunt enim ad minim veniam.</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6 col-md-6 col-sm-12 single-column">
                                                            <div class="single-item p_relative d_block">
                                                                <div class="icon-box"><i class="icon-20"></i></div>
                                                                <h4><a href="electrical-panels.html">Electrical Panels</a></h4>
                                                                <p>Lorem ipsum dolor amet con adicing elit sed.do usmod tempor ux ncididunt enim ad minim veniam.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab" id="tab-3">
                            <div class="inner-box">
                                <div class="row clearfix">
                                    <div class="col-lg-4 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_three">
                                            <div class="image-box p_relative d_block">
                                                <figure class="image p_relative d_block"><img src="assets/images/service/service-2.jpg" alt=""/></figure>
                                                <div class="text">
                                                    <h5><i class="icon-45"></i>Best of Electrical Services</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_three">
                                            <div class="content-box">
                                                <div class="text">
                                                    <h3>Commercial Service</h3>
                                                    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam quis nostrud exercitation ullamco laboris nis ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                                                </div>
                                                <div class="list-box clearfix">
                                                    <ul class="list-style-one clearfix">
                                                        <li>Air Conditioning</li>
                                                        <li>Electric Heating Systems</li>
                                                        <li>Telephone & Computer Wiring</li>
                                                        <li>Lighting</li>
                                                        <li>Power Outlets</li>
                                                        <li>Appliances Overheat</li>
                                                    </ul>
                                                    <ul class="list-style-one clearfix">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- service-section end --> */}

    </>
  )
}

export default Services