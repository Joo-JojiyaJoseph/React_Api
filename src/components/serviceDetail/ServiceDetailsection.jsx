import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const ServiceDetailsection = () => {

  const { baseUrlImage } = useContext(AppContext);
  const { id } = useParams(); // Get project ID from the URL
  const [serviceids, setServiceids] = useState([]);

  async function getServiceids() {
    try {
      const res_id = await fetch(`https://capricornuae.com/AdminApi/api/serviceids/${id}`);
      if (!res_id.ok) {
        throw new Error(`Error: ${res_id.status} ${res_id.statusText}`);
      }
      const data_id = await res_id.json();
      if (data_id.status == 200) {
        setServiceids(data_id.serviceids);
      } else {
        return <div>Loading...</div>;
      }
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    if (id) {
      getServiceids();
    }
  }, [id]);

  //Get service ,List----------------------
  const [services, setServices] = useState([]);
  async function getService() {
    try {
      const res = await fetch("https://capricornuae.com/AdminApi/api/service");
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setServices(data.services);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    getService();
  }, []);

  return (
    <>
          
      {/* <!-- project-details --> */}
      <section className="project-details p_relative">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="project-details-content">
                <div className="content-one">
                  <div className="text mb_60">
                    <h2>{serviceids.title}</h2>
                  </div>
                  <figure className="image-box">
                  <img src={`${baseUrlImage}/${serviceids.image}`} alt={serviceids.title} style={{height:'300px',objectFit:'cover'}} />
                  </figure>
                  <div className="text">
                    {/* <h3>service Discription</h3> */}
                    <p>
                    {serviceids.description}
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="project-sidebar ml_70">
                <ul className="project-info clearfix">
                  {services.length > 0 ? (
                    services.map((service, index) => (
                      <li key={index}>
                        <Link to={`/service/${service.id}`}> {service.title}</Link>
                      </li>
                    ))
                  ) : (
                    <p></p>
                  )}
                </ul>
              </div>
            </div>
          </div>
  
        </div>
      </section>
      {/* <!-- project-details end --> */}
    </>
  )
}

export default ServiceDetailsection