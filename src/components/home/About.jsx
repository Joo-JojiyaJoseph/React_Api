import React from 'react'
import shape2 from '/home/shape-2.png'
import shape1 from '/home/shape-1.png'
import about1 from '/home/about-1.jpg'
import icon1 from '/home/icon-1.png'
import icon2 from '/home/icon-2.png'
import signature_1 from '/home/signature_1.png'

const About = () => {
  return (
   <>
   
   {/* <!-- about-section --> */}
        <section className="about-section sec-pad">
            <div className="pattern-layer" style={{backgroundImage:`url(${shape2})`}}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_one">
                            <div data-animation-box className="image-box p_relative d_block pl_120 pb_100 mr_30">
                                <div className="shape-box">
                                    <div className="shape-1 p_absolute l_70 t_40 w_130 h_130" style={{backgroundImage:`url(${shape1})`}}></div>
                                    <div className="shape-2 p_absolute b_45 r_40 w_130 h_130" style={{backgroundImage:`url(${shape1})`}}></div>
                                </div>
                                <figure data-animation-text className="overlay-anim-black-bg image p_relative d_block" data-animation="overlay-animation">
                                    <img src={about1} alt=""/></figure>
                                <div className="icon p_absolute l_25 float-bob-y">
                                    <img src={icon1} alt=""/></div>
                                <div className="text-box centred p_absolute l_0 b_0 z_2">
                                    <div className="light-icon p_absolute">
                                        <img src={icon2}  alt=""/></div>
                                    <h2 className="d_block fs_40 lh_40 fw_bold mb_18">30</h2>
                                    <h3 className="d_block fw_medium">Years Experience of This Field</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                            <div className="content-box p_relative d_block ml_30">
                                <div className="sec-title p_relative mb_25">
                                    <h5 className="d_block fs_17 lh_25 fw_medium mb_9">About Us</h5>
                                    <h2 className="d_block fs_40 lh_50 fw_bold">Residential & Commercial Electrical Services</h2>
                                </div>
                                <div className="text p_relative d_block mb_30">
                                    <p>All of our services are backed by our 100% satisfaction guarantee. Our electricians can install anything from new security lighting for outdoors to a whole home generator that will keep your appliances working during a power outage.</p>
                                </div>
                                <div className="inner p_relative d_block mb_40">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-9"></i></div>
                                                <h4>Emergency Repairs</h4>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="icon-10"></i></div>
                                                <h4>Rewiring and Check-up</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-style-one clearfix">
                                    <li>Emergency power solutions (generators)</li>
                                    <li>Wiring and installation/upgrades</li>
                                    <li>Full-service electrical layout, design</li>
                                </ul>
                                <figure className="signature"><img src={signature_1} alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- about-section end --> */}
   </>
  )
}

export default About