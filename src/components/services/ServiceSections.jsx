import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './Service.css';



const ServiceSections = () => {

  const { baseUrlImage } = useContext(AppContext);
    const [services, setservices] = useState([]);
    const [error, setError] = useState(null);
  
    async function getservice() {
      try {
        const res = await fetch("/api/service");
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        setservices(data.services);
      } 
      catch (error) {
        setError(error.message);
      }
    }
    useEffect(() => {
      getservice();
    }, []);
  
  return (
    <>
      {/* <!-- service-style-two --> */}
      <section className="service-style-two service-page-1 sec-pad">
        <div className="auto-container">
          <div className="sec-title p_relative centred mb_50">
            <h5 className="d_block fs_17 lh_25 fw_medium mb_9">Our Services</h5>
            <h2 className="d_block fs_40 lh_50 fw_bold">Delivering Excellence in Every Build, <br />from Concept to Completion </h2>
          </div>
          <div className="row clearfix">

          {services.length > 0 ? (
          services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 service-block">
            <div className="service-block-one">
              <div className="inner-box">
                <div className="image-box p_relative d_block">
                  <div className="shape-1 p_absolute l_0 b_0"></div>
                  <div className="shape-2 p_absolute l_0 b_0"></div>
                  <figure className="image p_relative d_block">
                    <Link to="">
                      <img src={`${baseUrlImage}/${service.image}`} alt="" />
                    </Link>
                  </figure>
                </div>
                <div className="lower-content p_relative d_block">
                  {/* <div className="icon-box p_absolute r_30 w_90 h_90 lh_90 fs_40 b_radius_50 centred">
                    <i className="icon-17"></i>
                  </div> */}
                 <h3 style={{ height: '60px', display: 'flex', alignItems: 'center'}}>
                   <Link to="">{service.title}</Link>
                  </h3>
                  <p style={{ height: '120px' }}>{service.description}</p>
                  {/* <div className="link">
                    <Link to="">
                      Read more<i className="icon-7"></i>
                    </Link>
                  </div> */}
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
      {/* <!-- service-style-two end --> */}
    </>
  );
};

export default ServiceSections;
