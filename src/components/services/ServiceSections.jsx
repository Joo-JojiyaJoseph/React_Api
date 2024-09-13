import React from 'react';
import { Link } from 'react-router-dom';

// Define the list of services
const services = [
  {
    id: 1,
    link: 'air-conditioning.html',
    imgSrc: 'assets/images/service/service-3.jpg',
    altText: 'Interior Fit Out',
    iconClass: 'icon-15',
    title: 'Interior Fit Out',
    description: 'Capricorn is one of the best interior fit out & MEP Contracting company in UAE.',
  },
  {
    id: 2,
    link: 'air-conditioning.html',
    imgSrc: 'assets/images/service/service-3.jpg',
    altText: 'Technical and Maintenance Services',
    iconClass: 'icon-15',
    title: 'Technical and Maintenance Services',
    description: 'Capricorn is one of the best interior fit out & MEP Contracting company in UAE.',
  },

];

const ServiceSections = () => {
  return (
    <>
      {/* <!-- service-style-two --> */}
      <section className="service-style-two service-page-1 sec-pad">
        <div className="auto-container">
          <div className="sec-title p_relative centred mb_50">
            <h5 className="d_block fs_17 lh_25 fw_medium mb_9">Our Services</h5>
            <h2 className="d_block fs_40 lh_50 fw_bold">
              We are a Full Service Electrical <br />
              Contractor
            </h2>
          </div>
          <div className="row clearfix">
            {services.map(service => (
              <div key={service.id} className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div className="service-block-one">
                  <div className="inner-box">
                    <div className="image-box p_relative d_block">
                      <div className="shape-1 p_absolute l_0 b_0"></div>
                      <div className="shape-2 p_absolute l_0 b_0"></div>
                      <figure className="image p_relative d_block">
                        <Link to={service.link}>
                          <img src={service.imgSrc} alt={service.altText} />
                        </Link>
                      </figure>
                    </div>
                    <div className="lower-content p_relative d_block">
                      <div className="icon-box p_absolute r_30 w_90 h_90 lh_90 fs_40 b_radius_50 centred">
                        <i className={service.iconClass}></i>
                      </div>
                      <h3>
                        <Link to={service.link}>{service.title}</Link>
                      </h3>
                      <p>{service.description}</p>
                      <div className="link">
                        <Link to={service.link}>
                          Read more<i className="icon-7"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- service-style-two end --> */}
    </>
  );
};

export default ServiceSections;
