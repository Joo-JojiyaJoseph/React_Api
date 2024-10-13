import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import icon_3 from '/abouts/icon-3.png';
import './About.css'

const Testimonial = () => {
  const { baseUrlImage } = useContext(AppContext);
const [testimonials, setTestimonials] = useState([]);
const [error, setError] = useState(null);

async function gettestimonial() {
    try {
        const res = await fetch("/api/testimonials");
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setTestimonials(data.testimonials);
        console.log(data.testimonials)
      } 
      catch (error) {
        setError(error.message);
      }
    }
useEffect(() => {
  gettestimonial();
}, []);

  return (
    <>

      <section className="testimonial-style-two about-page p_relative">
        <div className="bg-layer"></div>
        <div className="auto-container">
          <div className="sec-title light p_relative mb_50 centred">
            <h5 className="d_block fs_17 lh_25 fw_medium mb_9">Testimonials</h5>
            <h2 className="d_block fs_40 lh_50 fw_bold">
              What Our Clients Say <br /> About Easton.
            </h2>
          </div>
          <div className="two-item-carousel owl-carousel owl-theme owl-nav-none">
          {testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (

              <div key={index} className="testimonial-block-one">
                <div className="inner-box p_relative d_block">
                  <div className="light-icon">
                    <img src={icon_3} alt="Icon" />
                  </div>
                  <div className="icon-box p_relative d_block fs_65">
                    <i className="icon-31"></i>
                  </div>
                  <p>{testimonial.quote}</p>
                  <div className="author-box p_relative d_block">
                    <figure className="author-thumb p_absolute l_0 t_0 w_70 h_70 b_radius_50">
                      <img src={`${baseUrlImage}/${testimonial.image}`} alt={testimonial.name} />
                    </figure>
                    <h5>{testimonial.name}</h5>
                    <span className="designation p_relative d_block">
                      {testimonial.designation}
                    </span>
                  </div>
                </div>
              </div>
              ))
            ) : (
              <p></p>
            )
            }
          </div>
        </div>
      </section>


    </>
  );
};

export default Testimonial;
