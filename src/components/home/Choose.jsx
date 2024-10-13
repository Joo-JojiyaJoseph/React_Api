import React from 'react'
import shape_5 from '/homes/shape-5.png'
import shape_6 from '/homes/shape-6.png'
import shape_7 from '/homes/shape-7.png'

import chooseus_1 from '/homes/chooseus-1.jpg'
import chooseus_2 from '/homes/chooseus-1.jpg'

const Choose = () => {
  return (
    <>
      {/* <!-- chooseus-section --> */}
        <section className="chooseus-section p_relative">
            <div className="pattern-layer" style={{backgroundImage:`url(${shape_5})`}}></div>
            <div className="bg-layer"></div>
            <div className="outer-container p_relative">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_four">
                            <div className="content-box">
                                <div className="sec-title p_relative mb_30">
                                    <h5 className="d_block fs_17 lh_25 fw_medium mb_9">Why Choose Us</h5>
                                    <h2 className="d_block fs_40 lh_50 fw_bold mb_25">Great Reasons For People Choose Easton</h2>
                                    <p>Capricorn MEP employs professional staff who will certainly assist you from the design and planning stage until the successful implementation.Our team is equipped with the latest machinery,equipment, tools materials and most of all skilled and dedicated workers.</p>
                                </div>
                                <div className="inner-box centred p_relative d_block">
                                    <div className="row clearfix">
                                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box p_relative d_iblock w_80 h_80 lh_80 fs_40 centred b_radius_50 tran_5"><i className="icon-21"></i></div>
                                                <h5 className="fs_18 fw_sbold">Affordable Price</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box p_relative d_iblock w_80 h_80 lh_80 fs_40 centred b_radius_50 tran_5"><i className="icon-22"></i></div>
                                                <h5 className="fs_18 fw_sbold">Quality Assistance</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box p_relative d_iblock w_80 h_80 lh_80 fs_40 centred b_radius_50 tran_5"><i className="icon-23"></i></div>
                                                <h5 className="fs_18 fw_sbold">Free Estimation</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box p_relative d_iblock w_80 h_80 lh_80 fs_40 centred b_radius_50 tran_5"><i className="icon-24"></i></div>
                                                <h5 className="fs_18 fw_sbold">Advance Systems</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box p_relative d_iblock w_80 h_80 lh_80 fs_40 centred b_radius_50 tran_5"><i className="icon-25"></i></div>
                                                <h5 className="fs_18 fw_sbold">Optimized Solutions</h5>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box p_relative d_iblock w_80 h_80 lh_80 fs_40 centred b_radius_50 tran_5"><i className="icon-26"></i></div>
                                                <h5 className="fs_18 fw_sbold">24/7 Availability</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_four">
                            <div className="image-box mt_8">
                                <div className="image-shape">
                                    <div className="shape-1" style={{backgroundImage:`url(${shape_6})`}}></div>
                                    <div className="shape-2" style={{backgroundImage:`url(${shape_7})`}}></div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-image">
                                        <figure className="image-1 p_relative d_block"><img src={chooseus_1} alt=""/></figure>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 video-column">
                                        <div className="video-inner p_relative d_block">
                                            <figure className="image-2 p_relative d_block"><img src={chooseus_2} alt=""/></figure>
                                            <div className="video-btn">
                                                <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><i className="icon-27"></i></a>
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
        {/* <!-- chooseus-section end --> */}
    </>
  )
}

export default Choose