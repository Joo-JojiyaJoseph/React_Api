import React from 'react'
import shape_9 from '/home/shape-9.png'
import faq_1 from '/home/faq-1.jpg'
import faq_2 from '/home/faq-2.jpg'

const Faq = () => {
  return (
    <>
    {/* <!-- faq-section --> */}
        <section className="faq-section p_relative">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_five">
                            <div className="image-box">
                                <div className="shape" style={{backgroundImage:`url(${shape_9})`}}></div>
                                <figure className="image image-1"><img src={faq_1}alt=""/></figure>
                                <figure className="image image-2"><img src={faq_2} alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_five">
                            <div className="content-box p_relative d_block ml_30">
                                <div className="sec-title p_relative mb_50">
                                    <h5 className="d_block fs_17 lh_25 fw_medium mb_9">FAQ’S</h5>
                                    <h2 className="d_block fs_40 lh_50 fw_bold mb_25">Frequently Asked Question</h2>
                                    <p className="fs_16">All of our services are backed by our 100% satisfaction guarantee Our electricians.</p>
                                </div>
                                <ul className="accordion-box">
                                    <li className="accordion block active-block">
                                        <div className="acc-btn active">
                                            <div className="icon-outer"><i className="far fa-angle-down"></i></div>
                                            <h5>Do You Do Residential Work?</h5>
                                        </div>
                                        <div className="acc-content current">
                                            <div className="text">
                                                <p>Lorem ipsum dolor sit elit consectur sed eiusmod tempor set aliquat enim minim veniam exercitation ullamco nis laboris aliquip commodo.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <div className="icon-outer"><i className="far fa-angle-down"></i></div>
                                            <h5>Are You Licensed and Insured?</h5>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">
                                                <p>Lorem ipsum dolor sit elit consectur sed eiusmod tempor set aliquat enim minim veniam exercitation ullamco nis laboris aliquip commodo.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className="acc-btn">
                                            <div className="icon-outer"><i className="far fa-angle-down"></i></div>
                                            <h5>Do You Do Commercial Electrical Repair?</h5>
                                        </div>
                                        <div className="acc-content">
                                            <div className="text">
                                                <p>Lorem ipsum dolor sit elit consectur sed eiusmod tempor set aliquat enim minim veniam exercitation ullamco nis laboris aliquip commodo.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- faq-section end --> */}
    </>
  )
}

export default Faq