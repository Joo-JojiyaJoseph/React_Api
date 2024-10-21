import React from 'react';
import pattern_layer from '/abouts/shape-24.png';
import shape_1 from '/abouts/shape-45.png';
import icon_box from '/abouts/icon-1.png';
import about_5 from '/abouts/about-5.jpg';
import about_6 from '/abouts/about-6.jpg';
import signature_1 from '/abouts/signature-1.png';

const AboutSection = () => {
  return (
    <>
      {/* <!-- about-section --> */}
      <section className="about-section sec-pad">
        <div className="pattern-layer-2"  style={{backgroundImage:`url(${pattern_layer})`}}></div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image_block_eight">
                <div data-animation-box className="image-box p_relative d_block">
                  <div className="shape">
                    <div className="shape-1" style={{backgroundImage:`url(${shape_1})`}} ></div>
                    <div className="shape-2" style={{backgroundImage:`url(${shape_1})`}}></div>
                  </div>
                  <div className="icon-box float-bob-y">
                    <img src={icon_box} alt="Icon" />
                  </div>
                  <figure
                    data-animation-text
                    className="overlay-anim-black-bg image image-1"
                    data-animation="overlay-animation" >
                    <img src={about_5} alt="About Us 1" />
                  </figure>
                  <figure className="image image-2">
                    <img src={about_6} alt="About Us 2" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box p_relative d_block ml_30">
                  <div className="sec-title p_relative mb_25">
                    <h5 className="d_block fs_17 lh_25 fw_medium mb_9">About Us</h5>
                    <h2 className="d_block fs_40 lh_50 fw_bold">
                      Residential & Commercial Electrical Services
                    </h2>
                  </div>
                  <div className="text p_relative d_block mb_30">
                    <p>
                    Capricorn is a registered company in the UAE, The Head office
and workshop is located in Abu Dhabi, So we can deliver a more
convenient service to our clients across the UAE.

Capricorn MEP is part of organization established and in full
operation Since 2018. After a couple of years,we have proven our
position in the market in the field of Construction and MEP
Services by being one of the fastest growing companies in the
Region.

Capricorn MEP understands clearly the needs of each company
participating in various Projects, Every client has its own
distinctive requirement and we are committed to providing the
best and suitable solutions in terms of Engineering Design,
Supply, Execution and after sales services.

Capricorn MEP employs professional staff who will certainly
assist you from the design and planning stage until the successful
implementation.

Our team is equipped with the latest machinery,equipment, tools
materials and most of all skilled and dedicated workers.
                    </p>
                  </div>
                  <div className="inner p_relative d_block mb_40">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-9"></i>
                          </div>
                          <h4>Plumbing</h4>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-10"></i>
                          </div>
                          <h4>Electrical</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="list-style-one clearfix">
                    <li>Emergency power solutions (generators)</li>
                    <li>Wiring and installation/upgrades</li>
                    <li>Full-service electrical layout, design</li>
                  </ul>
                  {/* <figure className="signature">
                    <img src={signature_1} alt="Signature" />
                  </figure> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about-section end --> */}
    </>
  );
};

export default AboutSection;
