import React from 'react'
import feature_1 from '/homes/feature-1.jpg'
import feature_2 from '/homes/feature-2.jpg'
import feature_3 from '/homes/feature-3.jpg'


const Feature = () => {
  return (
    <>
      {/* <!-- feature-section --> */}
        <section className="feature-section">
            <div className="outer-container p_relative pl_30 pr_30">
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInLeft" data-wow-duration="1500ms">
                            <div className="inner-box p_relative d_block clearfix">
                                <figure className="image-box p_relative d_block"><img src={feature_1} alt=""/></figure>
                                <div className="content-box p_relative d_block">
                                    <div className="icon-box p_relative d_block fs_50 lh_50"><i className="icon-12"></i></div>
                                    <h3><a >Plumbing Engineering Services.</a></h3>
                                    {/* <p>Lorem ipsum dolor amet cons adicing elit sed.</p> */}
                                    {/* <div className="link"><a ><span>Read more</span><i className="icon-7"></i></a></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInLeft" data-wow-duration="1500ms">
                            <div className="inner-box p_relative d_block clearfix">
                                <figure className="image-box p_relative d_block"><img src={feature_2} alt=""/></figure>
                                <div className="content-box p_relative d_block">
                                    <div className="icon-box p_relative d_block fs_50 lh_50"><i className="icon-13"></i></div>
                                    <h3><a >HVAC ENGINEERING SERVICES</a></h3>
                                    {/* <p>Lorem ipsum dolor amet cons adicing elit sed.</p> */}
                                    {/* <div className="link"><a ><span>Read more</span><i className="icon-7"></i></a></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one wow fadeInLeft" data-wow-duration="1500ms">
                            <div className="inner-box p_relative d_block clearfix">
                                <figure className="image-box p_relative d_block"><img src={feature_3} alt=""/></figure>
                                <div className="content-box p_relative d_block">
                                    <div className="icon-box p_relative d_block fs_50 lh_50"><i className="icon-14"></i></div>
                                    <h3><a >Best Maintanance</a></h3>
                                    {/* <p>Lorem ipsum dolor amet cons adicing elit sed.</p> */}
                                    {/* <div className="link"><a ><span>Read more</span><i className="icon-7"></i></a></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- feature-section end --> */}
    </>
  )
}

export default Feature