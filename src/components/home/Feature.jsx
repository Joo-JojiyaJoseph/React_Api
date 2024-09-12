import React from 'react'
import feature_1 from '/home/feature-1.jpg'
import feature_2 from '/home/feature-2.jpg'
import feature_3 from '/home/feature-3.jpg'


const Feature = () => {
  return (
    <>
      {/* <!-- feature-section --> */}
        <section class="feature-section">
            <div class="outer-container p_relative pl_30 pr_30">
                <div class="row clearfix">
                    <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one wow fadeInLeft" data-wow-duration="1500ms">
                            <div class="inner-box p_relative d_block clearfix">
                                <figure class="image-box p_relative d_block"><img src={feature_1} alt=""/></figure>
                                <div class="content-box p_relative d_block">
                                    <div class="icon-box p_relative d_block fs_50 lh_50"><i class="icon-12"></i></div>
                                    <h3><a href="index.html">Safety Inspection</a></h3>
                                    <p>Lorem ipsum dolor amet cons adicing elit sed.</p>
                                    <div class="link"><a href="index.html"><span>Read more</span><i class="icon-7"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one wow fadeInLeft" data-wow-duration="1500ms">
                            <div class="inner-box p_relative d_block clearfix">
                                <figure class="image-box p_relative d_block"><img src={feature_2} alt=""/></figure>
                                <div class="content-box p_relative d_block">
                                    <div class="icon-box p_relative d_block fs_50 lh_50"><i class="icon-13"></i></div>
                                    <h3><a href="index.html">Electric Installation</a></h3>
                                    <p>Lorem ipsum dolor amet cons adicing elit sed.</p>
                                    <div class="link"><a href="index.html"><span>Read more</span><i class="icon-7"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 feature-block">
                        <div class="feature-block-one wow fadeInLeft" data-wow-duration="1500ms">
                            <div class="inner-box p_relative d_block clearfix">
                                <figure class="image-box p_relative d_block"><img src={feature_3} alt=""/></figure>
                                <div class="content-box p_relative d_block">
                                    <div class="icon-box p_relative d_block fs_50 lh_50"><i class="icon-14"></i></div>
                                    <h3><a href="index.html">Best Maintanance</a></h3>
                                    <p>Lorem ipsum dolor amet cons adicing elit sed.</p>
                                    <div class="link"><a href="index.html"><span>Read more</span><i class="icon-7"></i></a></div>
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