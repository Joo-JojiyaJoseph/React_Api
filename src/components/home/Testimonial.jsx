import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import testimonial_bg from '/homes/testimonial-bg.jpg';
import testimonial_bg_2 from '/homes/testimonial-bg-2.jpg';

const Testimonial = () => {
  const { baseUrlImage } = useContext(AppContext);
  const [testimonials, settestimonials] = useState([]);
  const [error, setError] = useState(null);

  async function gettestimonial() {
    try {
      const res = await fetch("https://capricornuae.com/AdminApi/api/testimonials");
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      settestimonials(data.testimonials);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    gettestimonial();
  }, []);
  return (
    <>
      {/* <!-- testimonial-section --> */}
      <section className="testimonial-section p_relative">
        <div className="bg-layer parallax-bg" data-parallax='{"y": 100}'
         style={{backgroundImage:`url(${testimonial_bg}`}} ></div>
        <div className="bg-layer-2"  style={{backgroundImage:`url(${testimonial_bg_2}`}} ></div>
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
              <div className="sec-title light p_relative mb_50">
                <h5 className="d_block fs_17 lh_25 fw_medium mb_9">
                  Testimonials
                </h5>
                <h2 className="d_block fs_40 lh_50 fw_bold">
                  What Our Client Say <br />
                  About Capricorn.
                </h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 testimonial-column">
              <div className="testimonial-inner p_relative d_block ml_30">
                <div className="single-item-carousel owl-carousel owl-dots-none nav-style-one">
                  {testimonials.length > 0 ? (
                    testimonials.map((testimonial, index) => (
                      <div key={index} className="testimonial-block-one">
                        <div className="inner-box p_relative d_block">
                          <div className="light-icon">
                            <img src="assets/images/icons/icon-3.png" alt="" />
                          </div>
                          <div className="icon-box p_relative d_block fs_65">
                            <i className="icon-31"></i>
                          </div>
                          <p>{testimonial.quote}</p>
                          <div className="author-box p_relative d_block">
                            <figure className="author-thumb p_absolute l_0 t_0 w_70 h_70 b_radius_50">
                              <img
                                src={`${baseUrlImage}/uploads/testimonial/${testimonial.image}`}
                                alt=""
                              />
                            </figure>
                            {/* <h5>{testimonial.name}</h5> */}
                            <span className="designation p_relative d_block">
                              {/* {testimonial.designation} */}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- testimonial-section end --> */}
    </>
  );
};

export default Testimonial;
