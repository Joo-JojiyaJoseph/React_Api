import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import page_title_image from '/page-title.jpg'
import { AppContext } from '../../context/AppContext';

const ServiceDetailHero = () => {
    
  const { baseUrlImage } = useContext(AppContext);
  const { id } = useParams(); // Get service ID from the URL
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
  
  return (
    <>

      <Helmet>
        <title>{serviceids.title}</title>
        <meta name="description" content={serviceids.description} />
        <meta property="og:title" content={serviceids.title} />
        <meta property="og:description" content={serviceids.description} />
        <meta property="og:image" content={`${baseUrlImage}/${serviceids.image}`} />
      </Helmet>
    {/* <!-- Page Title --> */}
    <section className="page-title centred">
     <div className="bg-layer parallax-bg" data-parallax='{"y": 100}' style={{backgroundImage:`url(${page_title_image})`}}></div>
         <div className="auto-container">
             <div className="content-box">
                 <h2>{serviceids.title}</h2>
                 <ul className="bread-crumb clearfix">
                 <li><Link to="../home">Home</Link></li>
                     <li>{serviceids.title}</li>
                 </ul>
             </div>
         </div>
     </section>
     {/* <!-- End Page Title --> */}
    </>
  )
}

export default ServiceDetailHero