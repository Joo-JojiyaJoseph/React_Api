import React, { useEffect, useState } from 'react'

import careergif from '/career/career.gif';
import { Link } from 'react-router-dom';

const CareerSection = () => {
    const [careers, setCareers] = useState([]);
    const [error, setError] = useState(null);
    
    async function getcareer() {
        try {
            const res = await fetch("http://127.0.0.1:8000/api/job");
            if (!res.ok) {
              throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            const data = await res.json();
            setCareers(data.job);
            console.log(data.job)
          } 
          catch (error) {
            setError(error.message);
          }
        }
    useEffect(() => {
      getcareer();
    }, []);
  return (
    <>
            {/* <!-- career-style-five --> */}
        <section className="testimonial-style-five p_relative">
            <div className="auto-container">
                <div className="sec-title p_relative centred mb_50">
                    <h5 className="d_block fs_17 lh_25 fw_medium mb_9">careers</h5>
                    <h2 className="d_block fs_40 lh_50 fw_bold">Join the Revolution of Innovation. <br /> Let’s Create the Future Together</h2>
                </div>
                <div className="row clearfix">
                {careers.length > 0 ? (
              careers.map((career, index) => (
                    <div  key={index} className="col-lg-6 col-md-6 col-sm-12 testimonial-block">
                        <div className="testimonial-block-one">
                            <div className="inner-box p_relative d_block">
                                <div className="light-icon">
                                    <img src="assets/images/icons/icon-3.png" alt=""/>
                                    </div>
                                <div className="icon-box p_relative d_block fs_65"></div>
                                <h2>{career.title}</h2>
                                <p>{career.qualification}</p>
                                <div className="author-box p_relative d_block">
                                    <figure className="author-thumb p_absolute l_0 t_0 w_70 h_70 b_radius_50">
                                        <img src={careergif} alt=""/>
                                        </figure>
                                      {/* <div className="link"><Link to="">read More</Link></div> */}
                                    <span className="designation p_relative d_block"></span>
                                </div>
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
        {/* <!-- career-style-five end --> */}

    </>
  )
}

export default CareerSection