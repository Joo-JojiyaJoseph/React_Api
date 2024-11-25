import React from 'react'
import shape_12 from '/homes/shape-12.png'
import shape_13 from '/homes/shape-13.png'
import shape_7 from '/homes/shape-7.png'
import ct11 from '/homes/ct1.png'
const Cta = () => {
  return (
    <>
       {/* <!-- cta-section --> */}
        <section className="cta-section bg-color-1 p_relative pt_120 pb_120">
            <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage:`url(${shape_12})`}}></div>
                <div className="pattern-2" style={{backgroundImage:`url(${shape_13})`}}></div>
                <div className="pattern-3" style={{backgroundImage:`url(${shape_7})`}}></div>
                <div className="pattern-4" style={{backgroundImage:`url(${shape_7})`}}></div>
            </div>
            <figure className="image-layer"><img src={ct11} alt=""/></figure>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_six">
                            <div className="content-box p_relative d_block mr_20">
                                <div className="sec-title p_relative mb_13">
                                    <h5 className="d_block fs_17 lh_25 fw_medium mb_13">Contact</h5>
                                    <h2 className="d_block fs_40 lh_50 fw_bold">Need Help with The Best Services</h2>
                                </div>
                                <div className="text">
                                    <p>All of our services are backed by our 100% satisfaction guarantee Our technicians can install anything.</p>
                                </div>
                                <div className="support-box p_relative d_block">
                                    <div className="icon-box p_absolute l_0 t_0 w_70 h_70 lh_70 b_radius_50 fs_40"><i className="icon-37"></i></div>
                                    <h5>For Emergency</h5>
                                    <h3><a href="tel:+971505071276">+971505071276</a></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- cta-section end --> */}
    </>
  )
}

export default Cta